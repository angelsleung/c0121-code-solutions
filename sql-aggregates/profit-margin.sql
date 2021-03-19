with "cte_revenue" as (
  select "films"."title" as "film",
         "films"."filmId",
         sum("payments"."amount") as "revenue"
    from "films"
    join "inventory" using ("filmId")
    join "rentals" using ("inventoryId")
    join "payments" using ("rentalId")
  group by "films"."filmId"
),
      "cte_cost" as (
  select "films"."title" as "film",
         "films"."filmId",
         sum("films"."replacementCost") as "cost"
    from "films"
    join "inventory" using ("filmId")
  group by "films"."filmId"
)

select "cte_revenue"."film",
       "cte_revenue"."filmId",
       "cte_revenue"."revenue" as "revenue",
       "cte_cost"."cost" as "replacementCost",
       "cte_revenue"."revenue" - "cte_cost"."cost" as "profit"
  from "cte_revenue"
  join "cte_cost" using ("filmId")
  order by "profit" desc
  limit 5;

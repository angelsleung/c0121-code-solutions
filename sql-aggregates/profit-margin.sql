with cte_revenueCost as (
  select "films"."title" as "film",
    "films"."filmId",
    sum("films"."replacementCost") as "totalReplacementCost",
    sum("payments"."amount") as "totalRevenue"
    from "films"
    join "inventory" using ("filmId")
    join "rentals" using ("inventoryId")
    join "payments" using ("rentalId")
    group by "films"."filmId"
)

select "film",
    "filmId",
    "totalReplacementCost",
    "totalRevenue",
    "totalRevenue" - "totalReplacementCost" as "totalProfit"
    from cte_revenueCost
    order by "totalProfit" desc;

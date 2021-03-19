select "customers"."firstName",
  "customers"."lastName",
  sum("payments"."amount") as "totalRentals"
  from "customers"
  join "payments" using ("customerId")
  group by "customers"."customerId"
  order by "totalRentals" desc;

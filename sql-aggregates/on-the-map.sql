select "countries"."name" as "country",
       count("cities") as "# cities"
  from "countries"
  join "cities" using ("countryId")
  group by "countries"."countryId";

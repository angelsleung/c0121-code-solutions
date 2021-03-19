select "categories"."name" as "category",
       count("films") as "# films"
  from "actors"
  join "castMembers" using ("actorId")
  join "films" using ("filmId")
  join "filmCategory" using ("filmId")
  join "categories" using ("categoryId")
 where "actors"."firstName" = 'Lisa'
   and "actors"."lastName" = 'Monroe'
   group by "categories"."categoryId";

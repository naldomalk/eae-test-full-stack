import mongodb from "@/services/db/mongodb";
import * as entities from "@/entities";
import * as useCases from "@/useCases";

export default async function handler(req, res) {
  const { _entity, _sort, _asc = 1, ..._find } = req.query;

  if (!entities[_entity])
    return res.status(404).json({ message: "entity not found" });

  await mongodb.connect();
  const db = mongodb.getDb();
  const collection = db.collection(entities[_entity].collection);

  const useCase = useCases[_entity] || {};

  const data = await collection
    .find(useCases[_entity]?._find(_find))
    .sort(useCases[_entity]?._sort({ _sort, _asc }))
    .toArray();

  mongodb.close();

  res.status(200).json({ data });
}

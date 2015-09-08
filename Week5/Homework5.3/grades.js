db.grades.aggregate([
	{
		$unwind: "$scores"
	},
	{
		$match: { "scores.type" : { $nin: ["quiz"]} }
	},
	{
		$group: { _id: {"student_id" : "$student_id", "class_id" : "$class_id"}, GPA:{$avg: "$scores.score"} }
	},
	{
		$group: { _id: "$_id.class_id", GPA:{$avg: "$GPA"} }
	},
	{
		$sort: { GPA: 1}
	}
])

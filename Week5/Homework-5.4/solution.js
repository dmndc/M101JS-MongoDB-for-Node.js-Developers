db.zips.aggregate([
	{$match : 
		{ 
			"city" : {$regex: /^[0-9]/}
		} 
	},
	{$group : 
		{
			_id: null,
			"population": {$sum: "$pop"}
		}
	},
	{$project: 
		{
			_id:0, 
			"population": 1
		}
	}
])


	var javascript=javascript||{};
	javascript.projectA=javascript.projectA||{};
	javascript.projectA.details=function(id,name,salary)
	{
		this.id=id;
		this.name=name;
		this.salary=salary;
		this.getdetails=function()
		{
			return (this.id+" "+"name: "+this.name+" "+"salary: "+this.salary) ;
		}
		return this;
	}

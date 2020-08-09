var javascript=javascript||{};
javascript.projectB=javascript.projectB||{};
javascript.projectB.details=function(id,name)
{
  this.id=id;
  this.name=name;
  this.getdetails=function()
  {
  	return this.id+" "+this.name;
  }
  return this;
}
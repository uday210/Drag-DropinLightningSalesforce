({
	helperMethod : function(component, event, helper) {
        console.log('dropped');
        var sts= [];
        $('tr').each(function(i){
         
            
			var Idis = $(this).find('#stu_id')[0].outerText;
            for(var j=0;j<component.get("v.students").length;j++){
                var eachstd = component.get("v.students");
                console.log(eachstd[j]);
                if(eachstd[j].Id == Idis){
			component.set("v.students["+j+"].Roll_No__c",i+1);
             console.log(component.get("v.students[j].Roll_No__c"));
            }
            }
            
        });
      
                 var actionnew = component.get("c.sort_Students");
        console.log('component.get("v.students") ',component.get("v.students"));
       actionnew.setParams({
            StudentsData :component.get("v.students")
        });
        actionnew.setCallback(this,function(response){
            component.set('v.students',response.getReturnValue());
            
        });
                 $A.enqueueAction(actionnew);
		
	}
})
({
	doinit : function(component, event, helper) {
        
        var action = component.get("c.getStudents");
        
        action.setCallback(this,function(response){
            //response.getReturnValue()
            component.set('v.students',response.getReturnValue());
    		              var myEvent = $A.get("e.c:sortevent");
            
            
        $( "#sortable" ).sortable({
            update: function( ) {
                var v = component.get("v.bropped");
     component.set("v.bropped",!v);
        }
        });
        });
        
         $A.enqueueAction(action);
       // $( "#sortable" ).disableSelection();
		
	},
    
    doaction :function(component, event, helper){
        
        helper.helperMethod(component, event, helper);
    }
})
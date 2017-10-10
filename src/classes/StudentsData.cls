public class StudentsData {
    
    @AuraEnabled
    public Static  list<Stundent__c> getStudents(){
        
        
        return [select id,Name,Name__c,Roll_No__c from Stundent__c order by Roll_No__c ASC];
       // return null;
    }
    
    
     @AuraEnabled
    public Static  list<Stundent__c> sort_Students(list<Student__c> StudentsData){
        System.debug('StudentsData '+StudentsData);
       // String data = StudentsData.replace('"','\'');
     //   System.debug('data '+data);
       // list<Student__c> newStudents = (list<Student__c>)JSON.deserialize(StudentsData, list<Student__c>.class);
      
      //  System.debug('newStudents '+newStudents);
          update StudentsData;
        return [select id,Name,Name__c,Roll_No__c from Stundent__c order by Roll_No__c ASC ];
       // return null;
    }

}
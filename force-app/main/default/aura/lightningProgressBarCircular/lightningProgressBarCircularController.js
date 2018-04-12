({
    doInit : function(component, event, helper) {
        helper.doInit(component, event, helper) ;
    },
    refreshProgressBar : function(component, event, helper) {
        console.log('inside refreshProgressBar');
        helper.doInit(component, event, helper);
    }
})
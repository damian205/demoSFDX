({
    updateProgBarMenuLabel: function (component, event) {
        console.log('inside updateProgBarMenuLabel; component: ', component);
        var triggerCmp = component.find("selectedProgBar");
        if (triggerCmp) {
            var source = event.getSource();
            var label = source.get("v.label");
            triggerCmp.set("v.label", label);
            component.set("v.selectedProgBarName", label.toLowerCase());
            console.log('setting v.selectedProgBarName: ' + label.toLowerCase());
        }
    },
    updateProgBar: function (component, event, helper) {
        console.log('inside updateProgBar, component: ', component);
        var selectedProgBarName = component.get('v.selectedProgBarName');

        if (typeof(selectedProgBarName) === 'undefined' || selectedProgBarName.length == 0) {
            console.log('No selected progress bar, exiting');
            return false;
        }

        console.log('getting v.selectedProgBarName: ' + selectedProgBarName);
        var progBar = component.find('circprogbar-' + selectedProgBarName);
        console.log('progBar: ' + progBar);
        var newProgress = component.find('progressInput').get('v.value');
        console.log('newProgress: ' + newProgress);
        var newColor = component.find('newColor').get('v.value');
        console.log('newColor: ' + newColor);

        progBar.set('v.actualProgress', newProgress);

        if (newColor != '' && newColor != undefined && newColor != null) {
            progBar.set('v.color', newColor);
        }

        console.log('about to refresh component by calling progBar.refreshProgressBar()');
        progBar.refreshProgressBar();
    }
})
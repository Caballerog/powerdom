function Component(){
    this.className = 'Component';
    this.templatePath = "js/tpl/";
    this.nodes = null;
    this.currentTemplate = null;

    this.setCurrentTemplate = function(templateName){
        var className = templateName[0].toUpperCase() + templateName.substr(1);
        eval('this.currentTemplate = ' + className);
    };
    
    this.getTemplate = function(templateName){
        PD.loadJSFile(this.templatePath + this.className + "/" + templateName + ".js");
        this.setCurrentTemplate(templateName);
    };
    
    this.render = function(){

        for(var idNode in this.nodes){
            this.getTemplate(this.nodes[idNode]);
            this.currentTemplate.render(idNode);
        }
    };
}
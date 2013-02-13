function banner(){
    this.html = '<header id="banner" class="body">'+
        '<h1><a href="#">%%headerTitle%%</a></h1>'+
        '%%nav_menu%%'+
	'</header><!-- /#banner -->';

    this.nav_menu = function(){
    	var result = null;

    	var list_items = [
    		{
    			"attributes" : {"class" : "active"},
    			"text"  : Html.a({"href":"#"},"Home")
    		},
    		{
    			"text"  : Html.a({"href":"#"},"portfolio")
    		},
    		{
    			"text"  : Html.a({"href":"#"},"blog")
    		},
    		{
    			"text"  : Html.a({"href":"#"},"contact")
    		},
    	];

    	result = Html.nav(undefined, Html.ul(undefined, list_items));

    	return result;
    };
    
    this.getData = function(){
        var headerTitle = 'Smashing <strong>Simple Page Interface</strong>';
        var nav_menu = Banner.nav_menu();
        
        return {
            "headerTitle" : headerTitle,
            "nav_menu" : nav_menu
        }
    };

}

banner.prototype = new Template();

Banner = new banner();
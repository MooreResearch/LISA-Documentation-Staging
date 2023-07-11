var template = `
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
	<a class="navbar-brand" href="#">LISA Project</a><a class="navbar-brand" href="#"></a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarCollapse">
		<ul class="navbar-nav mr-auto">
			<li class="nav-item">
				<a class="nav-link" href="../index.html" data-pgc-field="documentation_link">Home</a>
			</li>
	 
			<li class="nav-item">
				<a class="nav-link" href="Headers/documentation.html" data-pgc-field="documentation_link">Documentation</a>
			</li>

			<li class="nav-item">
				<a class="nav-link" href="Headers/theory.html" data-pgc-field="theory_link">Theory</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="Headers/procedures.html" data-pgc-field="procedures_link">Procedures</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="Headers/Education/education.html" data-pgc-field="education_link">Education</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="Headers/testing.html" data-pgc-field="testing_link">Testing</a>
			</li>
		</ul>
		<form class="form-inline mt-2 mt-md-0">
			<input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
			<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
		</form>
	</div>
</nav>
`;


window.onload = function() {
    document.getElementById('header').innerHTML = template;
	var arr = window.location.pathname.split("/")
	var i = 0
	//Calculates how far from base directory current user is
	while(true){
		let popped = arr.pop();
		console.log(popped)
  		if (popped === "LISA-Documentation" || popped === "LISA-Documentation-Staging" || popped === "127.0.0.1:3000" || popped=== "") {
    	break;
		}
		i +=1
	} 
	//Name of Current Page
    var currentPage = window.location.pathname.split("/").pop();
    if (i >1) {
		//Gets header Links
		var links = document.querySelectorAll("#header .nav-item .nav-link");
		//String to adjust link location
		var s = ""
		//Creates adjustment string
		while (i>2){
			s += "../"
			i -=1
		}
        links.forEach(link => {
            var href = link.getAttribute('href')
		
            if (href.startsWith('Headers/')) {
                // Remove 'Headers/' from the start of the link
				//Adds apporiate amount of '../' to the start of the link
                link.setAttribute('href', s + href.substring(8));
				console.log(link.getAttribute('href'))
            }
			if (href.startsWith('../') && s !== "") {
                // Adds '../' to the start of the link
                link.setAttribute('href', s + href);
				console.log(link.getAttribute('href'))
            }
			if (href.substring(8) == currentPage){
				link.className += ' active'
			}
        });
    }
	else{
		var links = document.querySelectorAll("#header .nav-item .nav-link");
        links.forEach(link => {
            var href = link.getAttribute('href');
            if (href.startsWith('../')) {
                // Remove 'Headers/' from the start of the string
                link.setAttribute('href', href.substring(3));
				link.className += ' active'
            }
        });	
	} 
};




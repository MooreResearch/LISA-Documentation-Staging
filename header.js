window.onload = function() {
    document.getElementById('header').innerHTML = template;

    var currentPage = window.location.pathname.split("/").pop();
	console.log(currentPage)
   if (currentPage !== 'index.html' || currentPage !== '') {
        // replace the links
        var links = document.querySelectorAll("#header .nav-item .nav-link");
        links.forEach(link => {
            var href = link.getAttribute('href');
            if (href.startsWith('Headers/')) {
                // Remove 'Headers/' from the start of the string
                link.setAttribute('href', href.substring(8));
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
            }
        });	
	}
};
var template = `
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
	<a class="navbar-brand" href="#">LISA Project</a><a class="navbar-brand" href="#"></a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarCollapse">
		<ul class="navbar-nav mr-auto">
			<li class="nav-item">
				<a class="active nav-link" href="../index.html" data-pgc-field="documentation_link">Home</a>
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
				<a class="nav-link" href="Headers/education.html" data-pgc-field="education_link">Education</a>
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

document.getElementById('header').innerHTML = template;
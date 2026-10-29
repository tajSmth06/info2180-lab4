document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    const searchbox = document.getElementById('search-box');
    const resultDiv = document.getElementById('result');
    
    searchBtn.addEventListener('click',function(event){
        const query = searchbox.value.trim();

        fetch(`superheroes.php?query=${encodeURIComponent(query)}`)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data; 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    });

});

let button_collection = document.querySelectorAll(".c-button");

let customer_Service_div = document.querySelector('.online_customer_advisor');
let customer_tech_div = document.querySelector('.customer_tech_div');
let junior_developer_div = document.querySelector('.junior_developer_div');

for (let i = 0; i < button_collection.length; i++) {

    button_collection[i].addEventListener('click', function() {

        if (this.classList.contains('customer_service_opener')) {

       

            customer_Service_div.classList.add('visible');
            customer_tech_div.classList.remove('visible');
            junior_developer_div.classList.remove('visible');

        } 
        
        else if (this.classList.contains('junior_developer_opener')) {

           

            junior_developer_div.classList.add('visible');
            customer_tech_div.classList.remove('visible');
            customer_Service_div.classList.remove('visible');

        } 
        
        else {

           

            customer_tech_div.classList.add('visible');
            customer_Service_div.classList.remove('visible');
            junior_developer_div.classList.remove('visible');

        }

    });
}
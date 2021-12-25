const countwords = () =>
{
    let noc = document.getElementById('words').value.length;
    let now = document.getElementById('words').value;
 
    now =  now.match(/\w+/g);
    now = now.length;
    console.log(now);

    document.getElementById('showdata').innerHTML = " The total Characters = " + noc;
    document.getElementById('showwordscount').innerHTML = "The total words = " + now;
}
const countwords = () =>
{
    let noc = document.getElementById('words').value.length;
    let now = document.getElementById('words').value;
 
    now =  now.match(/\w+/g);
    now = now.length;

    document.getElementById('showdata').innerHTML = " The total Characters = " + noc;
    document.getElementById('showordscount').innerHTML = "The total words = " + now;
}

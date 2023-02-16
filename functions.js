function letterFinder(word,match)                                 // Function with parameters
{
    for(var i=0;i<word.length;i++)
    {
        if(word[i]==match)
        {
            console.log("found the ",match," at ",i);             // Function Body
        }
        else{
            console.log("...no match found at ",i);
        }
    }
}

letterFinder("test","t");                                         // Function call
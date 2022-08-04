let quotes = [
    {quote:"The elevator to success is out of order. You’ll have to use the stairs, one step at a time", authour:"Joe Girard"},
    {quote:"People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.", authour:"Zig Ziglar"},
    {quote:"I always wanted to be somebody, but now I realise I should have been more specific", authour:"Lily Tomlin"},
    {quote:"I am so clever that sometimes I don’t understand a single word of what I am saying", authour:"Oscar Wilde"},
    {quote:"People say nothing is impossible, but I do nothing every day", authour:"Winnie the Pooh"},
    {quote:"Life is like a sewer… what you get out of it depends on what you put into it.", authour:"Tom Lehrer"},
    {quote:"You can’t have everything. Where would you put it?", authour:"Steven Wright"},
    {quote:"Work until your bank account looks like a phone number.", authour:"Unknown "},
    {quote:"Change is not a four letter word… but often your reaction to it is!", authour:"Jeffrey Gitomer"},
    {quote:"If you think you are too small to make a difference, try sleeping with a mosquito", authour:"Dalai Lama"},
    {quote:"Bad decisions make good stories", authour:"Ellis Vidler"},
    {quote:"I’ll probably never fully become what I wanted to be when I grew up, but that’s probably because I wanted to be a ninja princess.", authour:"cassandra Duffy"},
    {quote:"When life gives you lemons, squirt someone in the eye", authour:"Cathy Guisewite"},
    {quote:"A clear conscience is a sure sign of a bad memory.", authour:"Mark Twain"},
    {quote:"I didn’t fail the test. I just found 100 ways to do it wrong", authour:"Benjamin Franklin"},
    {quote:"I used to think I was indecisive, but now I’m not so sure", authour:"Unknown"},
    {quote:"Don’t worry about the world coming to an end today. It’s already tomorrow in Australia", authour:"Charles Schulz"},
    {quote:"Think like a proton. Always positive", authour:"Unknown"},
    {quote:"Be happy – it drives people crazy", authour:"Unknown"},
    {quote:"someone who figures that taking a step backward after taking a step forward is not a disaster, it’s more like a cha-cha", authour:"Robert Brault"},
    {quote:"The question isn’t who is going to let me, it’s who is going to stop me", authour:"Ayn Rand"},
    {quote:"You’re only given a little spark of madness. You mustn’t lose it", authour:"Robin Williams"},
    {quote:"I am an early bird and a night owl… so I am wise and I have worms", authour:"Michael Scott"},
    {quote:"If you let your head get too big, it’ll break your neck.", authour:"Elvis Presley"},
    {quote:"The road to success is dotted with many tempting parking spaces.", authour:"Will Rogers"},
    {quote:"Leadership is the art of getting someone else to do something you want done because he wants to do it", authour:"Dwight D. Eisenhower"},
    {quote:"Live each day like it’s your second to the last. That way you can fall asleep at night", authour:"Jason Love"},
    {quote:"Even a stopped clock is right twice every day. After some years, it can boast of a long series of successes", authour:"Marie Von Ebner-Eschenbach"},
    {quote:"Honest criticism is hard to take, particularly from a relative, a friend, an acquaintance, or a stranger", authour:"Franklin P. Jones"},
    {quote:"I believe that if life gives you lemons, you should make lemonade… And try to find somebody whose life has given them vodka, and have a party", authour:"Ron White"},
    {quote:"Opportunity is missed by most people because it is dressed in overalls and looks like work", authour:"Thomas Eddison"},
    {quote:"A diamond is merely a lump of coal that did well under pressure", authour:"Unknown"},
    {quote:"Nothing is impossible, the word itself says “I’m possible!", authour:"Audrey Hepburn"},
    {quote:"Age is of no importance unless you’re a cheese", authour:"Billie Burke"},
    {quote:"When tempted to fight fire with fire, remember that the Fire Department usually uses water",authour:"Unknown"}
    ];

   
    let button = document.getElementById("btn")

    button.addEventListener("click",()=>{
        let random = Math.floor(Math.random()*quotes.length);
        let ranquotes = quotes[random].quote;
        let ranauthour = quotes[random].authour;
        document.getElementById("quotes").innerHTML = ranquotes;
        document.getElementById("auth").innerText =ranauthour;
    })

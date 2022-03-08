let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,'
    , 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015', 'Chris', 'Pine,', 'learn', 'Javascript'];

    //gets rid of [last in array('Javascript')] in array//
    secretMessage.pop();

    //adds the strings 'to' & 'Program' to end of array//
    secretMessage.push('to', 'Program');

    //changes the 8th sting, 'easily', into the new sting right//
    secretMessage[7] = 'right';

    //removes 1st string(Learning) from the array//
    secretMessage.shift();

    //adds string 'programing' to beginning of array
    secretMessage.unshift('Programming')

    //removes strings 5-10 & replaces them with the string 'know'//
    secretMessage.splice(5, 10, 'know');

    //Prints new secret message//
    console.log(secretMessage.join());

    //should print 'Programming is not about what you know, can figure out. -2015 Chris pine| as an array//
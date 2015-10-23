   
// Profile 1
    function openprompt(){

                var temp = {
                    state0: {
                        title: 'Success Story',
                        html:"Portland Code School gave me the foundation upon which to build from that has taken me in a year's time all over the stack in a multitude of languages. While I started out with Javascript, the concepts and encouragement for modern best-practices has put me in a position to where I can pick up any part of the stack in just about any language and learn quickly and efficiently. I work daily with PCS alumni and have never felt that we were underprepared in our given roles",
                        buttons: { Close: false},
                        focus: 1,
                        submit:function(e,v,m,f){ 
                            if(!v)
                                $.prompt.close()
                            else $.prompt.goToState('state1');//go forward
                            return false; 
                        }
                    },
                }
                $.prompt(temp,{
                    close: function(e,v,m,f){
                        if(v !== undefined){
                            var str = "You can now process with this given information:<br />";
                            $.each(f,function(i,obj){
                                str += i + " - <em>" + obj + "</em><br />";
                            }); 
                            $('#results').html(str);
                        }
                    },
                    classes: {
                        box: '',
                        fade: '',
                        prompt: '',
                        close: '',
                        title: 'lead',
                        message: '',
                        buttons: '',
                        button: 'btn',
                        defaultButton: 'btn-primary'
                    }
                });
            }
 //Profile 2
     function openprompt1(){

                var temp = {
                    state0: {
                        title: 'Success Story1',
                        html:" I chose PCS because I liked the vibe at the school and I wanted to focus on JavaScript and Node.js. I graduated from the JavaScript Immersion program in April of this year. My group project with 3 other devs was Treksmith.com. My impression with PCS was that you got back what you put into it, and you had to be driven to learn. It was challenging and ultimately rewarding. I was hired directly after by an Augmented Reality company in NYC called Blippar.",
                        buttons: { Close: false},
                        focus: 1,
                        submit:function(e,v,m,f){ 
                            if(!v)
                                $.prompt.close()
                            else $.prompt.goToState('state1');//go forward
                            return false; 
                        }
                    },
                }
                $.prompt(temp,{
                    close: function(e,v,m,f){
                        if(v !== undefined){
                            var str = "You can now process with this given information:<br />";
                            $.each(f,function(i,obj){
                                str += i + " - <em>" + obj + "</em><br />";
                            }); 
                            $('#results1').html(str);
                        }
                    },
                    classes: {
                        box: '',
                        fade: '',
                        prompt: '',
                        close: '',
                        title: 'lead',
                        message: '',
                        buttons: '',
                        button: 'btn',
                        defaultButton: 'btn-primary'
                    }
                });
            }
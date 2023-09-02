var names=new Array();
names[0]="Amiral";
names[1]="Adam";
names[2]="Maaziz";
names[3]="Jacques";
names[4]="Chymaou";
names[5]="frank";
names[6]="jarry";
names[7]="merille";
names[8]="laurenne";
names[9]="james";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
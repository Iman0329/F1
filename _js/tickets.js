$(document).ready(function(){
    $('.fa').click(function(){
        $('.navside').slideToggle();       
    })
})

//選擇到之日期判斷是否有比賽
    //先判斷月份？switch case？
        //1.選到前面比賽則顯示比賽時間已過，選到沒比賽日則顯示不是比賽日 
        //2.選到後面的比賽顯示尚未開啟預定一個月前才能預訂，選到沒比賽日則顯示不是比賽日   
        //3.選到austria顯示已售光，其餘兩個開放選擇，選到沒比賽日則顯示不是比賽日  

function getchooseday(){
    var chooseday = new Date(document.getElementById('day').value);
    var localchooseday = chooseday.toLocaleDateString();
    
    var choosemonth = (chooseday.getMonth()) + 1;
    var choosedate = chooseday.getDate();

    var text1 = 'Grands Prix : No Race today !';
    var text2 = 'Seats Available : No Race, not available';
    var text3 = '<div class="canchoose"><div>You can choose :&ensp;</div><div><p> Austria &emsp;&emsp;&emsp;&nbsp;7/3-4 </p><p> Great Britain &ensp;&nbsp; 7/17-18 </p> <p> Hungary&emsp;&emsp;&ensp; 7/31-8/1 </p></div></div>';
    var text4 = 'Seats Available : The Race is over, choose another date';
    var text5 = 'Seats Available : The Race is still far, you can order before one month';
    
    switch(choosemonth){
        case 1:
            document.getElementById('grandsprix').innerText = text1;
            document.getElementById('seats').innerText = text2;
            document.getElementById('seatschoose').innerHTML = text3;
            break;
        case 2:
            document.getElementById('grandsprix').innerText = text1;
            document.getElementById('seats').innerText = text2;
            document.getElementById('seatschoose').innerHTML = text3;
            break;
        case 3:
            if(choosedate==27 || choosedate==28){
                document.getElementById('grandsprix').innerText = 'Grands Prix : Formula 1 Gulf Air Bahrain Grand Prix 2021';
                document.getElementById('seats').innerText = text4;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            else{
                document.getElementById('grandsprix').innerText = text1;
                document.getElementById('seats').innerText = text2;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            break;
        case 4:
            if(choosedate==17 || choosedate==18){
                document.getElementById('grandsprix').innerText = 'Grands Prix : Formula 1 Pirelli Gran Premio Del Made In Italy 2021';
                document.getElementById('seats').innerText = text4;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            else{
                document.getElementById('grandsprix').innerText = text1;
                document.getElementById('seats').innerText = text2;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            break;
        case 5:
            if(choosedate==1 || choosedate==2){
                document.getElementById('grandsprix').innerText = 'Grands Prix : Formula 1 Heineken Grande Prémio De Portugal 2021';
                document.getElementById('seats').innerText = text4;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            else if(choosedate==8 || choosedate==9){
                document.getElementById('grandsprix').innerText = 'Grands Prix : Formula 1 Aramco Gran Premio De España 2021';
                document.getElementById('seats').innerText = text4;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            else if(choosedate==22 || choosedate==23){
                document.getElementById('grandsprix').innerText = 'Grands Prix : Formula 1 Grand Prix De Monaco 2021';
                document.getElementById('seats').innerText = text4;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            else{
                document.getElementById('grandsprix').innerText = text1;
                document.getElementById('seats').innerText = text2;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            break;
        case 6:
            if(choosedate==5 || choosedate==6){
                document.getElementById('grandsprix').innerText = 'Grands Prix : Formula 1 Azerbaijan Grand Prix 2021';
                document.getElementById('seats').innerText = text4;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            else if(choosedate==19 || choosedate==20){
                document.getElementById('grandsprix').innerText = 'Grands Prix : Formula 1 Emirates Grand Prix De France 2021';
                document.getElementById('seats').innerText = text4;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            else if(choosedate==26 || choosedate==27){
                document.getElementById('grandsprix').innerText = 'Grands Prix : Formula 1 BWT Grosser Preis Der Steiermark 2021';
                document.getElementById('seats').innerText = text4;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            else{
                document.getElementById('grandsprix').innerText = text1;
                document.getElementById('seats').innerText = text2;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            break;
        case 7:
            if(choosedate==3 || choosedate==4){
                document.getElementById('grandsprix').innerText = 'Grands Prix : Formula 1 BWT Grosser Preis Von Österreich 2021';
                document.getElementById('seats').innerText = 'Seats Available : SOLD OUT';
            }
            else if(choosedate==17 || choosedate==18){
                document.getElementById('grandsprix').innerText = 'Grands Prix : Formula 1 Pirelli British Grand Prix 2021';
                document.getElementById('seats').innerText = 'Seats Available : available';
                document.getElementById('seatschoose').innerHTML = '<div class="availableseats"><div class="track"><div class="trackdash"></div><div class="trackdash"></div><div class="trackdash"></div><div class="trackdash"></div><div class="trackdash"></div><h1>RACE TRACK</h1><div class="trackdash"></div><div class="trackdash"></div><div class="trackdash"></div><div class="trackdash"></div><div class="trackdash"></div></div><div class="people"><div class="seatsrow"><button class="seatscolumn"><p>1-1</p></button><button class="seatscolumn sold"><p>1-2</p></button><button class="seatscolumn sold"><p>1-3</p></button><button class="seatscolumn sold"><p>1-4</p></button><button class="seatscolumn"><p>1-5</p></button><button class="seatscolumn sold"><p>1-6</p></button><button class="seatscolumn sold"><p>1-7</p></button><button class="seatscolumn sold"><p>1-8</p></button><button class="seatscolumn sold"><p>1-9</p></button><button class="seatscolumn sold"><p>1-10</p></button></div><div class="seatsrow"><button class="seatscolumn"><p>2-1</p></button><button class="seatscolumn"><p>2-2</p></button><button class="seatscolumn"><p>2-3</p></button><button class="seatscolumn sold"><p>2-4</p></button><button class="seatscolumn"><p>2-5</p></button><button class="seatscolumn sold"><p>2-6</p></button><button class="seatscolumn sold"><p>2-7</p></button><button class="seatscolumn sold"><p>2-8</p></button><button class="seatscolumn sold"><p>2-9</p></button><button class="seatscolumn"><p>2-10</p></button></div><div class="seatsrow"><button class="seatscolumn"><p>3-1</p></button><button class="seatscolumn sold"><p>3-2</p></button><button class="seatscolumn sold"><p>3-3</p></button><button class="seatscolumn sold"><p>3-4</p></button><button class="seatscolumn"><p>3-5</p></button><button class="seatscolumn sold"><p>3-6</p></button><button class="seatscolumn"><p>3-7</p></button><button class="seatscolumn"><p>3-8</p></button><button class="seatscolumn"><p>3-9</p></button><button class="seatscolumn sold"><p>3-10</p></button></div><div class="seatsrow"><button class="seatscolumn sold"><p>4-1</p></button><button class="seatscolumn"><p>4-2</p></button><button class="seatscolumn sold"><p>4-3</p></button><button class="seatscolumn"><p>4-4</p></button><button class="seatscolumn sold"><p>4-5</p></button><button class="seatscolumn"><p>4-6</p></button><button class="seatscolumn"><p>4-7</p></button><button class="seatscolumn sold"><p>4-8</p></button><button class="seatscolumn sold"><p>4-9</p></button><button class="seatscolumn sold"><p>4-10</p></button></div><div class="seatsrow"><button class="seatscolumn sold"><p>5-1</p></button><button class="seatscolumn"><p>5-2</p></button><button class="seatscolumn"><p>5-3</p></button><button class="seatscolumn"><p>5-4</p></button><button class="seatscolumn"><p>5-5</p></button><button class="seatscolumn sold"><p>5-6</p></button><button class="seatscolumn"><p>5-7</p></button><button class="seatscolumn"><p>5-8</p></button><button class="seatscolumn sold"><p>5-9</p></button><button class="seatscolumn"><p>5-10</p></button></div></div></div> ';
                $(document).ready(function(){
                    var x = 0;
                    var total = 0;
                    var myseat = [];
                    $('button').on('click',function(){
                        if( $(this).hasClass('sold') == true ){
                            $('#youchoose').text( 'SOLD! Please choose another seat' );
                        }else{
                            x += 1;
                            total += 2000;
                            myseat[myseat.length] = ` ${$(this).text()} `;
                            myseat[myseat.length] = ',';
                            myseat.pop();
                            console.log(myseat);
                            $(this).css('background-color','red').addClass('sold');
                            $('#youchoose').text(  `Your seat : ${myseat}  Total : ${total} dollars` );
                        }
                    })
                })            
            }
            else if(choosedate==31){
                document.getElementById('grandsprix').innerText = 'Grands Prix : Formula 1 Magyar Nagydíj 2021';
                document.getElementById('seats').innerText = 'Seats Available : available';
                document.getElementById('seatschoose').innerHTML = '<div class="availableseats"><div class="track"><div class="trackdash"></div><div class="trackdash"></div><div class="trackdash"></div><div class="trackdash"></div><div class="trackdash"></div><h1>RACE TRACK</h1><div class="trackdash"></div><div class="trackdash"></div><div class="trackdash"></div><div class="trackdash"></div><div class="trackdash"></div></div><div class="people"><div class="seatsrow"><button class="seatscolumn sold"><p>1-1</p></button><button class="seatscolumn sold"><p>1-2</p></button><button class="seatscolumn"><p>1-3</p></button><button class="seatscolumn sold"><p>1-4</p></button><button class="seatscolumn sold"><p>1-5</p></button><button class="seatscolumn sold"><p>1-6</p></button><button class="seatscolumn"><p>1-7</p></button><button class="seatscolumn sold"><p>1-8</p></button><button class="seatscolumn sold"><p>1-9</p></button><button class="seatscolumn sold"><p>1-10</p></button></div><div class="seatsrow"><button class="seatscolumn"><p>2-1</p></button><button class="seatscolumn sold"><p>2-2</p></button><button class="seatscolumn sold"><p>2-3</p></button><button class="seatscolumn"><p>2-4</p></button><button class="seatscolumn"><p>2-5</p></button><button class="seatscolumn"><p>2-6</p></button><button class="seatscolumn sold"><p>2-7</p></button><button class="seatscolumn sold"><p>2-8</p></button><button class="seatscolumn"><p>2-9</p></button><button class="seatscolumn sold"><p>2-10</p></button></div><div class="seatsrow"><button class="seatscolumn sold"><p>3-1</p></button><button class="seatscolumn"><p>3-2</p></button><button class="seatscolumn"><p>3-3</p></button><button class="seatscolumn"><p>3-4</p></button><button class="seatscolumn sold"><p>3-5</p></button><button class="seatscolumn sold"><p>3-6</p></button><button class="seatscolumn"><p>3-7</p></button><button class="seatscolumn"><p>3-8</p></button><button class="seatscolumn"><p>3-9</p></button><button class="seatscolumn"><p>3-10</p></button></div><div class="seatsrow"><button class="seatscolumn"><p>4-1</p></button><button class="seatscolumn"><p>4-2</p></button><button class="seatscolumn"><p>4-3</p></button><button class="seatscolumn"><p>4-4</p></button><button class="seatscolumn"><p>4-5</p></button><button class="seatscolumn"><p>4-6</p></button><button class="seatscolumn"><p>4-7</p></button><button class="seatscolumn"><p>4-8</p></button><button class="seatscolumn"><p>4-9</p></button><button class="seatscolumn"><p>4-10</p></button></div><div class="seatsrow"><button class="seatscolumn"><p>5-1</p></button><button class="seatscolumn"><p>5-2</p></button><button class="seatscolumn"><p>5-3</p></button><button class="seatscolumn"><p>5-4</p></button><button class="seatscolumn"><p>5-5</p></button><button class="seatscolumn"><p>5-6</p></button><button class="seatscolumn"><p>5-7</p></button><button class="seatscolumn"><p>5-8</p></button><button class="seatscolumn"><p>5-9</p></button><button class="seatscolumn"><p>5-10</p></button></div></div></div>';
                $(document).ready(function(){
                    var x = 0;
                    var total = 0;
                    var myseat = [];
                    $('button').on('click',function(){
                        if( $(this).hasClass('sold') == true ){
                            $('#youchoose').text( 'SOLD! Please choose another seat' );
                        }else{
                            x += 1;
                            total += 2000;
                            myseat[myseat.length] = ` ${$(this).text()} `;
                            myseat[myseat.length] = ',';
                            myseat.pop();
                            console.log(myseat);
                            $(this).css('background-color','red').addClass('sold');
                            $('#youchoose').text(  `Your seat : ${myseat}  Total : ${total} dollars` );
                        }
                    })
                })     
            }
            else{
                document.getElementById('grandsprix').innerText = text1;
                document.getElementById('seats').innerText = text2;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            break;
            case 8:
            if(choosedate==1){
                document.getElementById('grandsprix').innerText = 'Grands Prix : Formula 1 Magyar Nagydíj 2021';
                document.getElementById('seats').innerText = 'Seats Available : available';
                document.getElementById('seatschoose').innerHTML = '<div class="availableseats"><div class="track"><div class="trackdash"></div><div class="trackdash"></div><div class="trackdash"></div><div class="trackdash"></div><div class="trackdash"></div><h1>RACE TRACK</h1><div class="trackdash"></div><div class="trackdash"></div><div class="trackdash"></div><div class="trackdash"></div><div class="trackdash"></div></div><div class="people"><div class="seatsrow"><button class="seatscolumn"><p>1-1</p></button><button class="seatscolumn sold"><p>1-2</p></button><button class="seatscolumn"><p>1-3</p></button><button class="seatscolumn sold"><p>1-4</p></button><button class="seatscolumn sold"><p>1-5</p></button><button class="seatscolumn sold"><p>1-6</p></button><button class="seatscolumn"><p>1-7</p></button><button class="seatscolumn sold"><p>1-8</p></button><button class="seatscolumn sold"><p>1-9</p></button><button class="seatscolumn sold"><p>1-10</p></button></div><div class="seatsrow"><button class="seatscolumn"><p>2-1</p></button><button class="seatscolumn sold"><p>2-2</p></button><button class="seatscolumn sold"><p>2-3</p></button><button class="seatscolumn"><p>2-4</p></button><button class="seatscolumn"><p>2-5</p></button><button class="seatscolumn"><p>2-6</p></button><button class="seatscolumn sold"><p>2-7</p></button><button class="seatscolumn sold"><p>2-8</p></button><button class="seatscolumn"><p>2-9</p></button><button class="seatscolumn sold"><p>2-10</p></button></div><div class="seatsrow"><button class="seatscolumn sold"><p>3-1</p></button><button class="seatscolumn"><p>3-2</p></button><button class="seatscolumn"><p>3-3</p></button><button class="seatscolumn"><p>3-4</p></button><button class="seatscolumn sold"><p>3-5</p></button><button class="seatscolumn sold"><p>3-6</p></button><button class="seatscolumn"><p>3-7</p></button><button class="seatscolumn"><p>3-8</p></button><button class="seatscolumn"><p>3-9</p></button><button class="seatscolumn"><p>3-10</p></button></div><div class="seatsrow"><button class="seatscolumn"><p>4-1</p></button><button class="seatscolumn"><p>4-2</p></button><button class="seatscolumn"><p>4-3</p></button><button class="seatscolumn"><p>4-4</p></button><button class="seatscolumn"><p>4-5</p></button><button class="seatscolumn"><p>4-6</p></button><button class="seatscolumn"><p>4-7</p></button><button class="seatscolumn"><p>4-8</p></button><button class="seatscolumn"><p>4-9</p></button><button class="seatscolumn"><p>4-10</p></button></div><div class="seatsrow"><button class="seatscolumn"><p>5-1</p></button><button class="seatscolumn"><p>5-2</p></button><button class="seatscolumn"><p>5-3</p></button><button class="seatscolumn"><p>5-4</p></button><button class="seatscolumn"><p>5-5</p></button><button class="seatscolumn"><p>5-6</p></button><button class="seatscolumn"><p>5-7</p></button><button class="seatscolumn"><p>5-8</p></button><button class="seatscolumn"><p>5-9</p></button><button class="seatscolumn"><p>5-10</p></button></div></div></div>';
                $(document).ready(function(){
                    var x = 0;
                    var total = 0;
                    var myseat = [];
                    $('button').on('click',function(){
                        if( $(this).hasClass('sold') == true ){
                            $('#youchoose').text( 'SOLD! Please choose another seat' );
                        }else{
                            x += 1;
                            total += 2000;
                            myseat[myseat.length] = ` ${$(this).text()} `;
                            myseat[myseat.length] = ',';
                            myseat.pop();
                            console.log(myseat);
                            $(this).css('background-color','red').addClass('sold');
                            $('#youchoose').text(  `Your seat : ${myseat}  Total : ${total} dollars` );
                        }
                    })
                })                
            }
            else if(choosedate==28 || choosedate==29){
                document.getElementById('grandsprix').innerText = 'Grands Prix : Formula 1 Rolex Belgian Grand Prix 2021';
                document.getElementById('seats').innerText = text5;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            else{
                document.getElementById('grandsprix').innerText = text1;
                document.getElementById('seats').innerText = text2;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            break;
        case 9:
            if(choosedate==4 || choosedate==5){
                document.getElementById('grandsprix').innerText = 'Grands Prix : Formula 1 Heineken Dutch Grand Prix 2021';
                document.getElementById('seats').innerText = text5;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            else if(choosedate==11 || choosedate==12){
                document.getElementById('grandsprix').innerText = 'Grands Prix : Formula 1 Heineken Gran Premio D’italia 2021';
                document.getElementById('seats').innerText = text5;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            else if(choosedate==25 || choosedate==26){
                document.getElementById('grandsprix').innerText = 'Grands Prix : Formula 1 VTB Russian Grand Prix 2021';
                document.getElementById('seats').innerText = text5;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            else{
                document.getElementById('grandsprix').innerText = text1;
                document.getElementById('seats').innerText = text2;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            break;
        case 10:
            if(choosedate==2 || choosedate==3){
                document.getElementById('grandsprix').innerText = 'Grands Prix : Formula 1 Turkish Grand Prix 2021';
                document.getElementById('seats').innerText = text5;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            else if(choosedate==9 || choosedate==10){
                document.getElementById('grandsprix').innerText = 'Grands Prix : Formula 1 Honda Japanese Grand Prix 2021';
                document.getElementById('seats').innerText = text5;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            else if(choosedate==23 || choosedate==24){
                document.getElementById('grandsprix').innerText = 'Grands Prix : Formula 1 Aramco United States Grand Prix 2021';
                document.getElementById('seats').innerText = text5;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            else if(choosedate==30 || choosedate==31){
                document.getElementById('grandsprix').innerText = 'Grands Prix : Formula 1 Gran Premio De La Ciudad De México 2021';
                document.getElementById('seats').innerText = text5;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            else{
                document.getElementById('grandsprix').innerText = text1;
                document.getElementById('seats').innerText = text2;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            break;
        case 11:
            if(choosedate==6 || choosedate==7){
                document.getElementById('grandsprix').innerText = 'Grands Prix : Formula 1 Heineken Grande Prêmio De São Paulo 2021';
                document.getElementById('seats').innerText = text5;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            else if(choosedate==20 || choosedate==21){
                document.getElementById('grandsprix').innerText = 'Grands Prix : TBC';
                document.getElementById('seats').innerText = text5;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            else{
                document.getElementById('grandsprix').innerText = text1;
                document.getElementById('seats').innerText = text2;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            break;
        case 12:
            if(choosedate==4 || choosedate==5){
                document.getElementById('grandsprix').innerText = 'Grands Prix : Formula 1 Saudi Arabian Grand Prix 2021';
                document.getElementById('seats').innerText = text5;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            else if(choosedate==11 || choosedate==12){
                document.getElementById('grandsprix').innerText = 'Grands Prix : Formula 1 Etihad Airways Abu Dhabi Grand Prix 2021';
                document.getElementById('seats').innerText = text5;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            else{
                document.getElementById('grandsprix').innerText = text1;
                document.getElementById('seats').innerText = text2;
                document.getElementById('seatschoose').innerHTML = text3;
            }
            break;
    }
}

function clearchoose(){
    console.log('fuck');
    document.getElementById('day').value = null;
    document.getElementById('grandsprix').innerText = null;
    document.getElementById('seats').innerText = null;
    document.getElementById('seatschoose').innerHTML = null;
    document.getElementById('youchoose').innerHTML = ' ';
}
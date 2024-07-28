      let create = document.querySelector(".btn");
        let content = document.querySelector('.content');
        let box = document.querySelector('.box');


        create.addEventListener("click",function(){

            //Hide box 

            box.style.display = "none";
            
            // Create Element => div

            const dif = document.createElement("div");
            dif.className = "diff";

            // Create Element => canvas

            const canvas = document.createElement("canvas");
            canvas.className = "qrcode ";
            canvas.getElementsByTagName("qrcode");
            
            //style canvas

            canvas.style.height = "250px";
            canvas.style.width = "250px";

            // Create Element => BtnDel

            const BtnDel = document.createElement("button");
            BtnDel.className = "BtnDel";
            BtnDel.innerHTML = "Delete"

        

             //Show Element in content

            content.appendChild(dif);
            dif.appendChild(canvas);
            dif.appendChild(BtnDel);
            // dif.appendChild(BtnDownload);

            //Create a qrcode

            var text = document.getElementById("text").value;
            // var canvas = document.getElementById("qrcode");
            QRCode.toCanvas(canvas, text, { width: 250, height: 250 }, function (error) {
                if (error) console.error(error);
                console.log('QRCode is active');
            });

            BtnDel.addEventListener("click",function(){

                //Show box 

                box.style.display = "block";

                //Remove diff

                dif.remove();

                }); 
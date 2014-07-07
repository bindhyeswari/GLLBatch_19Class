document.addEventListener('DOMContentLoaded', function(){




    var slider = {
        slides: [],

        sliderObj: document.getElementsByClassName('slider')[0],

        slideWidth: 480,
        currentSlide: 0,
        moveToNext: function(){
            this.currentSlide++;
            // code to move the slide
            var finalPos = this.currentSlide * this.slideWidth;
            var initPos = this.sliderObj.scrollLeft;
            var sliderObj = this;
            var id = setInterval(function (){
                sliderObj.scrollLeft = initPos++;
                if (initPos > finalPos)
                    clearInterval(id);
            }, 1);


        },
        moveToPrevious: function(){
            this.currentSlide--;
            // code to move the slide
            var finalPos = this.currentSlide * this.slideWidth;
            var initPos = this.sliderObj.scrollLeft;
            var sliderObj = this;
            var id = setInterval(function (){
                sliderObj.scrollLeft = initPos--;
                if (initPos < finalPos)
                    clearInterval(id);
            }, 1);
        }

    };

    console.log(slider);

    document.getElementById('arrow_left').addEventListener('click', function (){
        slider.moveToPrevious();
    });
    document.getElementById('arrow_right').addEventListener('click', function(){
        slider.moveToNext();
    });

});
document.addEventListener('DOMContentLoaded', function(){




    var slider = {
        slides: [],

        sliderObj: document.getElementsByClassName('slider')[0],

        slideWidth: 480,
        currentSlide: 0,
        moveToNext: function(){
            this.currentSlide++;
            // code to move the slide
            this.sliderObj.scrollLeft = this.currentSlide * this.slideWidth;
        },
        moveToPrevious: function(){
            this.currentSlide--;
            // code to move the slide
            this.sliderObj.scrollLeft = this.currentSlide * this.slideWidth;
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
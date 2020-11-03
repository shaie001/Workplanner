
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

let currentTime = moment();

currentTime = currentTime.startOf("hour");

let beforeTime = moment().startOf('day').add(9, "hours");



let hourOne = beforeTime.add(0, "h");

hourOne = hourOne.format('hh:mm A');

$(".block1").text(hourOne);

let hourTwo = beforeTime.add(1, "h");
hourTwo = hourTwo.format('hh:mm A');

$(".block2").text(hourTwo);

let hourThree = beforeTime.add(1, "h");
hourThree = hourThree.format('hh:mm A');

$(".block3").text(hourThree);

let hourFour = beforeTime.add(1, "h");
hourFour = hourFour.format('hh:mm A');

$(".block4").text(hourFour);

let hourFive = beforeTime.add(1, "h");
hourFive = hourFive.format('hh:mm A');

$(".block5").text(hourFive);

let hourSix = beforeTime.add(1, "h");
hourSix = hourSix.format('hh:mm A');

$(".block6").text(hourSix);

let hourSeven = beforeTime.add(1, "h");
hourSeven = hourSeven.format('hh:mm A');

$(".block7").text(hourSeven);

let hourEight = beforeTime.add(1, "h");
hourEight = hourEight.format('hh:mm A');

$(".block8").text(hourEight);

let hourNine = beforeTime.add(1, "h");
hourNine = hourNine.format('hh:mm A');

$(".block9").text(hourNine);


function SetTime() {

    hourOne = moment().startOf('day').add(9, "hours");

    currentTime = currentTime.startOf("hour");

    if (currentTime.isAfter(hourOne)) {
        $(".form9").addClass("past");
    }
    else if (currentTime.isBefore(hourOne)) {
        $(".form9").addClass("future");
    }
    else if (currentTime.isSame(hourOne)) {
        $(".form9").addClass("present");
    };

    hourTwo = moment().startOf('day').add(10, "hours");

    if (currentTime.isAfter(hourTwo)) {
        $(".form10").addClass("past");
    }
    else if (currentTime.isBefore(hourTwo)) {
        $(".form10").addClass("future");
    }
    else if (currentTime.isSame(hourTwo)) {
        $(".form10").addClass("present");
    };

    hourThree = moment().startOf('day').add(11, "hours");

    if (currentTime.isAfter(hourThree)) {
        $(".form11").addClass("past");
    }
    else if (currentTime.isBefore(hourThree)) {
        $(".form11").addClass("future");
    }
    else if (currentTime.isSame(hourThree)) {
        $(".form11").addClass("present");
    };

    hourFour = moment().startOf('day').add(12, "hours");

    if (currentTime.isAfter(hourFour)) {
        $(".form12").addClass("past");
    }
    else if (currentTime.isBefore(hourFour)) {
        $(".form12").addClass("future");
    }
    else if (currentTime.isSame(hourFour)) {
        $(".form12").addClass("present");
    };

    hourFive = moment().startOf('day').add(13, "hours");

    if (currentTime.isAfter(hourFive)) {
        $(".form1").addClass("past");
    }
    else if (currentTime.isBefore(hourFive)) {
        $(".form1").addClass("future");
    }
    else if (currentTime.isSame(hourFive)) {
        $(".form1").addClass("present");
    };

    hourSix = moment().startOf('day').add(14, "hours");

    if (currentTime.isAfter(hourSix)) {
        $(".form2").addClass("past");
    }
    else if (currentTime.isBefore(hourSix)) {
        $(".form2").addClass("future");
    }
    else if (currentTime.isSame(hourSix)) {
        $(".form2").addClass("present");
    };

    hourSeven = moment().startOf('day').add(15, "hours");

    if (currentTime.isAfter(hourSeven)) {
        $(".form3").addClass("past");
    }
    else if (currentTime.isBefore(hourSeven)) {
        $(".form3").addClass("future");
    }
    else if (currentTime.isSame(hourSeven)) {
        $(".form3").addClass("present");
    };

    hourEight = moment().startOf('day').add(16, "hours");

    if (currentTime.isAfter(hourEight)) {
        $(".form4").addClass("past");
    }
    else if (currentTime.isBefore(hourEight)) {
        $(".form4").addClass("future");
    }
    else if (currentTime.isSame(hourEight)) {
        $(".form4").addClass("present");
    };

    hourNine = moment().startOf('day').add(17, "hours");

    if (currentTime.isAfter(hourNine)) {
        $(".form5").addClass("past");
    }
    else if (currentTime.isBefore(hourNine)) {
        $(".form5").addClass("future");
    }
    else if (currentTime.isSame(hourNine)) {
        $(".form5").addClass("present");
    };
}
SetTime();

let hoursoftheday = [9, 10, 11, 12, 1, 2, 3, 4, 5];

for (let i = 0; i < hoursoftheday.length; i++) {
    let dataHour = localStorage.getItem(hoursoftheday[i]);

    $(".form" + hoursoftheday[i]).val(dataHour);
}

$(".saveBtn").click(function (event) {
    event.preventDefault();
    let formValue = $(this).siblings(".form-control").val();
    let listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});
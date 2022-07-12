        function switchGood() {
            var isGood = document.getElementById("g").checked;
            var isCheap = document.getElementById("c").checked;
            var isFast = document.getElementById("f").checked;
            if (isCheap && isFast) {
                    document.getElementById("c").checked = false;
                    document.getElementById("f").checked = false;
            }
        }
        function switchCheap() {
            var isGood = document.getElementById("g").checked;
            var isCheap = document.getElementById("c").checked;
            var isFast = document.getElementById("f").checked;
            if (isGood && isFast) {
                    document.getElementById("g").checked = false;
                    document.getElementById("f").checked = false;
            }
        }
        function switchFast() {
            var isGood = document.getElementById("g").checked;
            var isCheap = document.getElementById("c").checked;
            var isFast = document.getElementById("f").checked;
            if (isGood && isCheap) {
                    document.getElementById("c").checked = false;
                    document.getElementById("f").checked = false;
            }
        }
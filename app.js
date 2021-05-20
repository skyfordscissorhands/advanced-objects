function Video(title, minutes) {

        this.title= title;
        this.minutes = minutes;  
}
    Video.prototype.watch= function() {
        alert("You watched all " + this.minutes + " minutes of " + this.title);
    };
 
    var vid = new Video("Otters Holding Hands", 90);
    vid.watch();
    var vid = new Video("Pulp Fiction", 100);
    vid.watch();
    var vid = new Video("Fantastic Mr. Fox", 90);
    vid.watch();
    var vid = new Video("Ghostbusters", 90);
    vid.watch();
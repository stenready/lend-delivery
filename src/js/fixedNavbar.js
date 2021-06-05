const sticky = {
  sticky_after: 200,
  init: function () {
    this.header = document.querySelector('#navbar');
    this.clone = this.header.cloneNode(true);
    this.clone.classList.add("clone");
    this.header.insertBefore(this.clone, null);
    this.scroll();
    this.events();
  },

  scroll: function () {
    if (window.scrollY > this.sticky_after) {
      document.body.classList.add("down");
    }
    else {
      document.body.classList.remove("down");
    }
  },

  events: function () {
    window.addEventListener("scroll", this.scroll.bind(this));
  }
};

document.addEventListener("DOMContentLoaded", sticky.init.bind(sticky));
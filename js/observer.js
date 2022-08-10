const observerfeatuteone = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const getCardId = entry.target ;
    if (entry.isIntersecting ) {
        getCardId.classList.add('cardAnimation1');
        return;
    }

    getCardId.classList.remove('cardAnimation1');
  });
});

observerfeatuteone.observe(document.querySelector('.feature-card-one'));

const observerfeatutetwo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const getCardId = entry.target ;
      if (entry.isIntersecting ) {
          getCardId.classList.add('cardAnimation2');
          return;
      }

      getCardId.classList.remove('cardAnimation2');
    });
  });


observerfeatutetwo.observe(document.querySelector('.feature-card-two'));

const observerfeatutethree = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const getCardId = entry.target ;
      if (entry.isIntersecting ) {
          getCardId.classList.add('cardAnimation3');
          return;
      }

      getCardId.classList.remove('cardAnimation3');
    });
  });


observerfeatutethree.observe(document.querySelector('.feature-card-three'));

const observerfeatutefour = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const getCardId = entry.target ;
      if (entry.isIntersecting ) {
          getCardId.classList.add('cardAnimation4');
          return;
      }

      getCardId.classList.remove('cardAnimation4');
    });
  });


observerfeatutefour.observe(document.querySelector('.feature-card-four'));

const observerepisodeleft = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const getCardId = entry.target ;
      if (entry.isIntersecting ) {
          getCardId.classList.add('cardAnimation1');
          return;
      }

      getCardId.classList.remove('cardAnimation1');
    });
  });


  observerepisodeleft.observe(document.querySelector('.episode-card-left'));

  const observerepisoderightone = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const getCardId = entry.target ;
      if (entry.isIntersecting ) {
          getCardId.classList.add('episodecardAnimation1');
          return;
      }

      getCardId.classList.remove('episodecardAnimation1');
    });
  });


  observerepisoderightone.observe(document.querySelector('.episode-card-right-one'));

  const observerepisoderighttwo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const getCardId = entry.target ;
      if (entry.isIntersecting ) {
          getCardId.classList.add('episodecardAnimation2');
          return;
      }

      getCardId.classList.remove('episodecardAnimation2');
    });
  });


  observerepisoderighttwo.observe(document.querySelector('.episode-card-right-two'));

  const observerepisoderightthree = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const getCardId = entry.target ;
      if (entry.isIntersecting ) {
          getCardId.classList.add('episodecardAnimation3');
          return;
      }

      getCardId.classList.remove('episodecardAnimation3');
    });
  });


  observerepisoderightthree.observe(document.querySelector('.episode-card-right-three'));

  const observerepisoderightfour = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const getCardId = entry.target ;
      if (entry.isIntersecting ) {
          getCardId.classList.add('episodecardAnimation4');
          return;
      }

      getCardId.classList.remove('episodecardAnimation4');
    });
  });


  observerepisoderightfour.observe(document.querySelector('.episode-card-right-four'));
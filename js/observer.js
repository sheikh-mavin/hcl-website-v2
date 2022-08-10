const observerfeatuteone = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const getCardId = entry.target ;
    if (entry.isIntersecting ) {
        getCardId.classList.add('animate__fadeIn');
        return;
    }

    getCardId.classList.remove('animate__fadeIn');
  });
});

observerfeatuteone.observe(document.querySelector('.feature-card-one'));

const observerfeatutetwo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const getCardId = entry.target ;
      if (entry.isIntersecting ) {
          getCardId.classList.add('animate__fadeIn');
          return;
      }

      getCardId.classList.remove('animate__fadeIn');
    });
  });


observerfeatutetwo.observe(document.querySelector('.feature-card-two'));

const observerfeatutethree = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const getCardId = entry.target ;
      if (entry.isIntersecting ) {
          getCardId.classList.add('animate__fadeIn');
          return;
      }

      getCardId.classList.remove('animate__fadeIn');
    });
  });


observerfeatutethree.observe(document.querySelector('.feature-card-three'));

const observerfeatutefour = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const getCardId = entry.target ;
      if (entry.isIntersecting ) {
          getCardId.classList.add('animate__fadeIn');
          return;
      }

      getCardId.classList.remove('animate__fadeIn');
    });
  });


observerfeatutefour.observe(document.querySelector('.feature-card-four'));

const observerepisodeleft = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const getCardId = entry.target ;
      if (entry.isIntersecting ) {
          getCardId.classList.add('animate__zoomIn');
          return;
      }

      getCardId.classList.remove('animate__zoomIn');
    });
  });


  observerepisodeleft.observe(document.querySelector('.episode-card-left'));

  const observerepisoderightone = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const getCardId = entry.target ;
      if (entry.isIntersecting ) {
          getCardId.classList.add('animate__slideInRight');
          return;
      }

      getCardId.classList.remove('animate__slideInRight');
    });
  });


  observerepisoderightone.observe(document.querySelector('.episode-card-right-one'));

  const observerepisoderighttwo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const getCardId = entry.target ;
      if (entry.isIntersecting ) {
          getCardId.classList.add('animate__slideInRight');
          return;
      }

      getCardId.classList.remove('animate__slideInRight');
    });
  });


  observerepisoderighttwo.observe(document.querySelector('.episode-card-right-two'));

  const observerepisoderightthree = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const getCardId = entry.target ;
      if (entry.isIntersecting ) {
          getCardId.classList.add('animate__slideInRight');
          return;
      }

      getCardId.classList.remove('animate__slideInRight');
    });
  });


  observerepisoderightthree.observe(document.querySelector('.episode-card-right-three'));

  const observerepisoderightfour = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const getCardId = entry.target ;
      if (entry.isIntersecting ) {
          getCardId.classList.add('animate__slideInRight');
          return;
      }

      getCardId.classList.remove('animate__slideInRight');
    });
  });


  observerepisoderightfour.observe(document.querySelector('.episode-card-right-four'));
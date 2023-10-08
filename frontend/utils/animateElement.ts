const animateElement = (selectors: NodeListOf<Element>) => {
  let elementsToAnimateCount = 0;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add("animate-in");
          observer.unobserve(target); // Stop observing the current target
          elementsToAnimateCount--;
          if (elementsToAnimateCount === 0) {
            observer.disconnect();
          }
        }
      });
    },
    {
      root: null, // relative to viewport
      rootMargin: "0px", // margins around root. Values are similar to css property. Can have values similar to css (top right bottom left)
      threshold: 0.5, // at least 50% of the target is visible
    }
  );

  selectors.forEach((element) => {
    observer.observe(element);
    elementsToAnimateCount++;
  });
};

export default animateElement;

export const NAVLINKS = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "About Us",
    path: "about",
  },

  {
    name: "RPL",
    path: "rpl",
  },
  {
    name: "Blog",
    path: "software",
  },

  {
    name: "Contact Us",
    path: "contact",
  },
] as const;

export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
      duration: 0.333,
    },
  }),
};

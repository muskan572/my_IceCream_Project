// ----------------------------------------------------------------------

function path(root, subLink) {
  return `${root}${subLink}`;
}

const ROOTS_DASH = "/icecream-web";

// ----------------------------------------------------------------------

export const PATH_DASH = {
  root: ROOTS_DASH,
  home: path(ROOTS_DASH, "/home"),
  contact: path(ROOTS_DASH, "/contactUs"),
  aboutUs: path(ROOTS_DASH, "/aboutUs"),
  cone: path(ROOTS_DASH, "/cone"),
  stick: path(ROOTS_DASH, "/stick"),
  cup: path(ROOTS_DASH, "/cup"),
  cake: path(ROOTS_DASH, "/cake"),
  waff: path(ROOTS_DASH, "/waff"),
};
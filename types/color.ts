export type HTMLColorValues =
    "black" |
    "navy" |
    "darkblue" |
    "mediumblue" |
    "blue" |
    "darkgreen" |
    "green" |
    "teal" |
    "darkcyan" |
    "deepskyblue" |
    "darkturquoise" |
    "mediumspringgreen" |
    "lime" |
    "springgreen" |
    "aqua" |
    "cyan" |
    "midnightblue" |
    "dodgerblue" |
    "lightseagreen" |
    "forestgreen" |
    "seagreen" |
    "darkslategray" |
    "darkslategrey" |
    "limegreen" |
    "mediumseagreen" |
    "turquoise" |
    "royalblue" |
    "steelblue" |
    "darkslateblue" |
    "mediumturquoise" |
    "indigo" |
    "darkolivegreen" |
    "cadetblue" |
    "cornflowerblue" |
    "rebeccapurple" |
    "mediumaquamarine" |
    "dimgray" |
    "dimgrey" |
    "slateblue" |
    "olivedrab" |
    "slategray" |
    "slategrey" |
    "lightslategray" |
    "lightslategrey" |
    "mediumslateblue" |
    "lawngreen" |
    "chartreuse" |
    "aquamarine" |
    "maroon" |
    "purple" |
    "olive" |
    "gray" |
    "grey" |
    "skyblue" |
    "lightskyblue" |
    "blueviolet" |
    "darkred" |
    "darkmagenta" |
    "saddlebrown" |
    "darkseagreen" |
    "lightgreen" |
    "mediumpurple" |
    "darkviolet" |
    "palegreen" |
    "darkorchid" |
    "yellowgreen" |
    "sienna" |
    "brown" |
    "darkgray" |
    "darkgrey" |
    "lightblue" |
    "greenyellow" |
    "paleturquoise" |
    "lightsteelblue" |
    "powderblue" |
    "firebrick" |
    "darkgoldenrod" |
    "mediumorchid" |
    "rosybrown" |
    "darkkhaki" |
    "silver" |
    "mediumvioletred" |
    "indianred" |
    "peru" |
    "chocolate" |
    "tan" |
    "lightgray" |
    "lightgrey" |
    "thistle" |
    "orchid" |
    "goldenrod" |
    "palevioletred" |
    "crimson" |
    "gainsboro" |
    "plum" |
    "burlywood" |
    "lightcyan" |
    "lavender" |
    "darksalmon" |
    "violet" |
    "palegoldenrod" |
    "lightcoral" |
    "khaki" |
    "aliceblue" |
    "honeydew" |
    "azure" |
    "sandybrown" |
    "wheat" |
    "beige" |
    "whitesmoke" |
    "mintcream" |
    "ghostwhite" |
    "salmon" |
    "antiquewhite" |
    "linen" |
    "lightgoldenrodyellow" |
    "oldlace" |
    "red" |
    "fuchsia" |
    "magenta" |
    "deeppink" |
    "orangered" |
    "tomato" |
    "hotpink" |
    "coral" |
    "darkorange" |
    "lightsalmon" |
    "orange" |
    "lightpink" |
    "pink" |
    "gold" |
    "peachpuff" |
    "navajowhite" |
    "moccasin" |
    "bisque" |
    "mistyrose" |
    "blanchedalmond" |
    "papayawhip" |
    "lavenderblush" |
    "seashell" |
    "cornsilk" |
    "lemonchiffon" |
    "floralwhite" |
    "snow" |
    "yellow" |
    "lightyellow" |
    "ivory" |
    "white";

export type HexColor = `#${string}`;
export type RgbColor =
    `rgb(${string}, ${string}, ${string})`
    | `rgb(${string}, ${string}, ${string}, ${string})`
    | `rgb(${string} ${string} ${string} / ${string})`;
export type RgbaColor = `rgba(${string}, ${string}, ${string}, ${string})` | `rgb(${string} ${string} ${string} / ${string})`;
export type HslColor =
    `hsl(${string}, ${string}, ${string})`
    | `hsl(${string}, ${string}, ${string}, ${string})`
    | `hsl(${string} ${string} ${string} / ${string})`;
export type HslaColor = `hsla(${string}, ${string}, ${string}, ${string})`
    | `hsla(${string} ${string} ${string} / ${string})`;

export type Color =
    'inherit' | 'initial' | 'revert' | 'unset' |
    'currentcolor' | 'currentColor'
    | HTMLColorValues
    | HexColor
    | RgbColor
    | RgbaColor
    | HslColor
    | HslaColor;

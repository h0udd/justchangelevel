//بتحويل رقم المربع في grid
// إلى موقعه الحقيقي بالبيكسل على الشاش

export const gridCalls = n => {
    return n * 16;   
}
export const isSpaceFree = (wall , x ,y ) => {
   const str = `${x},${y}`;
   const isWallPresent = wall.has(str);
    return !isWallPresent;
}


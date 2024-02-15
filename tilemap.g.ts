// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile17 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "tilemap":
            case "level1":return tiles.createTilemap(hex`100010000f0f0f0f0f0f0f0f0f010101010101010f020202020202020f010101010101010f020202020202020f010101010101010f020202020202020f010101010101010f0f0f0202020f0f0f0101010101010201010f0202020f01010101010101010e0101010101010101010101010101010e0101010101010101010101010101010e0101010101010c01010101010101010e01010101010306040101010101010102010101010c090a0b0c01020d0d0d020101010c01010805070101020d0d0d02010103060401010c010102020d0d0d02020c090a0b0c01010101020d0d0d0d0d02010805070101010101020d0d0d0d0d0201010c010101010101020d0d0d0d0d02`, img`
2 . . . . . . . 2 2 2 2 2 2 2 2 
2 . . . . . . . 2 . . . . . . 2 
2 . . . . . . . 2 . . . . . . 2 
2 . . . . . . . 2 . . . . . . 2 
2 2 2 . . . 2 2 2 . . . . . . 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . 2 . . . 2 2 
. . . . . . . . . . 2 . . . 2 2 
. . . . . . . . . 2 2 . . . 2 2 
. . . . . . . . . 2 . . . . . 2 
. . . . . . . . . 2 . . . . . 2 
. . . . . . . . . 2 . . . . . 2 
`, [myTiles.transparency16,myTiles.tile6,myTiles.tile3,myTiles.tile9,myTiles.tile11,myTiles.tile12,myTiles.tile8,myTiles.tile4,myTiles.tile10,myTiles.tile13,myTiles.tile14,myTiles.tile1,myTiles.tile2,myTiles.tile7,myTiles.tile15,myTiles.tile17], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "walls":
            case "tile3":return tile3;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile1":
            case "tile12":return tile12;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile2":
            case "tile13":return tile13;
            case "myTile0":
            case "tile1":return tile1;
            case "myTile7":
            case "tile14":return tile14;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile8":
            case "tile15":return tile15;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile9":
            case "tile16":return tile16;
            case "myTile10":
            case "tile17":return tile17;
            case "table":
            case "tile4":return tile4;
            case "table0":
            case "tile9":return tile9;
            case "table1":
            case "tile10":return tile10;
            case "table2":
            case "tile11":return tile11;
            case "myTile":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

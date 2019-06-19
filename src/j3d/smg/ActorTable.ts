
import { NameObjFactory } from "./smg_scenes";
import { Kinopio, TicoComet, EarthenPipe, StarPiece, CollapsePlane, BlackHole, Peach, PenguinRacer, Coin, Penguin, SimpleEffectObj, EffectObjR1000F50, GCaptureTarget, FountainBig, AstroEffectObj, WarpPod, AstroCountDownPlate, Butler, Rosetta, Tico, Sky, Air, ShootingStar, EffectObj20x20x10SyncClipping, EffectObj50x50x10SyncClipping, EffectObj10x10x10SyncClipping, AstroMapObj, EffectObjR100F50SyncClipping, PriorDrawAir, BlueChip, YellowChip, PeachCastleGardenPlanet, SimpleMapObj, CrystalCage } from "./Actors";
import { OceanBowl } from "./OceanBowl";

interface ActorTableEntry {
    objName: string;
    factory: NameObjFactory;
}

function _(objName: string, factory: NameObjFactory): ActorTableEntry {
    return { objName, factory };
}

const ActorTable: ActorTableEntry[] = [
    // NPCs
    _("Butler",                         Butler),
    _("Kinopio",                        Kinopio),
    _("Peach",                          Peach),
    _("Penguin",                        Penguin),
    _("PenguinRacer",                   PenguinRacer),
    _("PenguinRacerLeader",             PenguinRacer),
    _("Rosetta",                        Rosetta),
    _("Tico",                           Tico),
    _("TicoAstro",                      Tico),
    _("TicoComet",                      TicoComet),

    // Misc objects
    _("BlackHole",                      BlackHole),
    _("BlackHoleCube",                  BlackHole),
    _("BlueChip",                       BlueChip),
    _("Coin",                           Coin),
    _("PurpleCoin",                     Coin),
    _("CollapsePlane",                  CollapsePlane),
    _("CrystalCageS",                   CrystalCage),
    _("CrystalCageM",                   CrystalCage),
    _("CrystalCageL",                   CrystalCage),
    _("EarthenPipe",                    EarthenPipe),
    _("EarthenPipeInWater",             EarthenPipe),
    _("FountainBig",                    FountainBig),
    _("GCaptureTarget",                 GCaptureTarget),
    _("OceanBowl",                      OceanBowl),
    _("StarPiece",                      StarPiece),
    _("WarpPod",                        WarpPod),
    _("YellowChip",                     YellowChip),

    // Not good enough for prime-time yet.
    // _("ShootingStar",         ShootingStar),

    // Sky/Air
    _("AuroraSky",                      Sky),
    _("BeyondGalaxySky",                Sky),
    _("BeyondHellValleySky",            Sky),
    _("BeyondHorizonSky",               Sky),
    _("BeyondOrbitSky",                 Sky),
    _("BeyondPhantomSky",               Sky),
    _("BeyondSandSky",                  Sky),
    _("BeyondSandNightSky",             Sky),
    _("BeyondSummerSky",                Sky),
    _("BeyondTitleSky",                 Sky),
    _("BigFallSky",                     Sky),
    _("Blue2DSky",                      Sky),
    _("BrightGalaxySky",                Sky),
    _("ChildRoomSky",                   Sky),
    _("CloudSky",                       Sky),
    _("DarkSpaceStormSky",              Sky),
    _("DesertSky",                      Sky),
    _("DotPatternSky",                  Sky),
    _("FamicomMarioSky",                Sky),
    _("GalaxySky",                      Sky),
    _("GoodWeatherSky",                 Sky),
    _("GreenPlanetOrbitSky",            Sky),
    _("HalfGalaxySky",                  Sky),
    _("HolePlanetInsideSky",            Sky),
    _("KoopaVS1Sky",                    Sky),
    _("KoopaVS2Sky",                    Sky),
    _("KoopaJrLv3Sky",                  Sky),
    _("MagmaMonsterSky",                Sky),
    _("MemoryRoadSky",                  Sky),
    _("MilkyWaySky",                    Sky),
    _("OmoteuLandSky",                  Sky),
    _("PhantomSky",                     Sky),
    _("RockPlanetOrbitSky",             Sky),
    _("SummerSky",                      Sky),
    _("VRDarkSpace",                    Sky),
    _("VROrbit",                        Sky),
    _("VRSandwichSun",                  Sky),
    _("VsKoopaLv3Sky",                  Sky),
    _("HomeAir",                        Air),
    _("SphereAir",                      PriorDrawAir),
    _("SunsetAir",                      Air),
    _("FineAir",                        Air),
    _("DimensionAir",                   Air),
    _("DarknessRoomAir",                Air),
    _("TwilightAir",                    Air),

    // Misc. Map Objects
    _("KoopaShipE",                     SimpleMapObj),
    _("PeachCastleTownBeforeAttack",    SimpleMapObj),
    _("PeachCastleTownGate",            SimpleMapObj),

    // Astro
    _("AstroCountDownPlate",            AstroCountDownPlate),
    _("AstroDomeEntrance",              AstroMapObj),
    _("AstroStarPlate",                 AstroMapObj),

    // Effects
    _("AstroTorchLightRed",             SimpleEffectObj),
    _("AstroTorchLightBlue",            SimpleEffectObj),
    _("BirdLouseS",                     EffectObj20x20x10SyncClipping),
    _("BirdLouseL",                     EffectObj50x50x10SyncClipping),
    _("EffectTicoS",                    AstroEffectObj),
    _("EffectTicoL",                    AstroEffectObj),
    _("FallGreenLeaf",                  EffectObj10x10x10SyncClipping),
    _("FallRedLeaf",                    EffectObj10x10x10SyncClipping),
    _("ForestWaterfallL",               EffectObjR1000F50),
    _("ForestWaterfallS",               EffectObjR1000F50),
    _("IcePlanetLight",                 EffectObjR100F50SyncClipping),
    _("IcicleRockLight",                EffectObjR100F50SyncClipping),
    _("SandBreezeS",                    EffectObj10x10x10SyncClipping),
    _("SnowS",                          EffectObj10x10x10SyncClipping),
    _("SpaceDustL",                     EffectObj50x50x10SyncClipping),
    _("Steam",                          SimpleEffectObj),
    _("TwinFallLakeWaterFall",          EffectObjR1000F50),
    _("WaterfallL",                     EffectObjR1000F50),
    _("WaterfallS",                     EffectObj20x20x10SyncClipping),
];

export function getActorNameObjFactory(objName: string): NameObjFactory | null {
    const entry = ActorTable.find((entry) => entry.objName === objName);
    if (entry !== undefined)
        return entry.factory;
    return null;
}
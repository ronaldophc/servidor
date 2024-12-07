// Modify existing recipes
ServerEvents.recipes(event => {
    event.recipes.farmersdelight.cooking(
	    ["minecraft:bone",
        "minecraft:rotten_flesh",
        "iceandfire:ectoplasm",
        "alexsmobs:soul_heart",
        "alexsmobs:elastic_tendon",
        "endrem:undead_soul"
        ],
	    "endrem:undead_eye", // output
	    50, // exp
	    30, // cookTime
	    "minecraft:ender_eye", // container
	),

    event.shapeless(
        Item.of('endrem:guardian_eye'), // arg 1: output
        [
          'minecraft:ender_eye',
          'upgrade_aquatic:elder_eye'
        ]
      )

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:manipulation_essence",
            "ars_nouveau:fire_essence",
            "ars_nouveau:earth_essence",
            "ars_nouveau:abjuration_essence",
            "ars_nouveau:conjuration_essence",
            "ars_nouveau:air_essence",
            "minecraft:lapis_block",
            "ars_nouveau:source_gem_block"
        ], // input items
	    "minecraft:ender_eye", // reagent
	    "endrem:magical_eye", // output
	    8000, // source cost
	    // true // keep nbt of reagent, think like a smithing recipe
	),

  event.shapeless(
      Item.of('endrem:exotic_eye'), // arg 1: output
      [
        '#quark:corundum_cluster',
        '#quark:trumpet_saplings',
        '#integrations:cave_material',
        'minecraft:amethyst_shard',
        'minecraft:ender_eye',
        'biomemakeover:illunite_shard',
        '#integrations:coral',
        '#integrations:ars_saplings',
        '#regions_unexplored:prismarite_crystals'
      ]
    )
})
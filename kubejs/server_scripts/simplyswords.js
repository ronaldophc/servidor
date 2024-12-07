ServerEvents.recipes(event => {
		event.remove({ output: 'simplyswords:tainted_relic' }), 
		event.remove({ output: 'simplyswords:righteous_relic' }), 
		event.remove({ output: 'simplyswords:sunfire' }), 
		event.remove({ output: 'simplyswords:harbinger' }), 
		event.remove({ output: 'simplyswords:waking_lichblade' }), 
		event.remove({ output: 'simplyswords:awakened_lichblade' }), 
		event.remove({ output: 'simplyswords:runefused_gem'}),
		event.remove({ output: 'simplyswords:netherfused_gem'}),

		event.recipes.ars_nouveau.enchanting_apparatus([
	            "simplyswords:empowered_remnant",
	            "ars_nouveau:fire_essence",
	            "rubinated_nether:ruby",
	            "betternether:cincinnasite_ingot",
	            "minecraft:netherite_ingot",
	            "betternether:cincinnasite_ingot",
	            "rubinated_nether:ruby",
	            "ars_nouveau:fire_essence"
	        ], // input items
		    "simplyswords:runic_tablet", // reagent
		    "simplyswords:netherfused_gem", // output
		    666
		),

		event.recipes.ars_nouveau.enchanting_apparatus([
	            "simplyswords:empowered_remnant",
	            "ars_nouveau:conjuration_essence",
	            "minecraft:diamond",
	            "spelunkery:portal_fluid_bottle",
	            "iceandfire:pixie_dust",
	            "spelunkery:portal_fluid_bottle",
	            "minecraft:diamond",
	            "ars_nouveau:conjuration_essence"
	        ], // input items
		    "simplyswords:runic_tablet", // reagent
		    "simplyswords:runefused_gem", // output
		    500
		),

		event.recipes.ars_nouveau.enchanting_apparatus([
	            "simplyswords:runic_tablet",
	            "minecraft:netherite_ingot",
	            "rubinated_nether:ruby"
	        ], // input items
		    "simplyswords:netherfused_gem", // reagent
		    "simplyswords:netherfused_gem", // output
		    666
		),

		event.recipes.ars_nouveau.enchanting_apparatus([
	            "simplyswords:runic_tablet",
	            "spelunkery:portal_fluid_bottle",
	            "minecraft:diamond"
	        ], // input items
		    "simplyswords:runefused_gem", // reagent
		    "simplyswords:runefused_gem", // output
		    500
		),

		event.recipes.ars_nouveau.enchanting_apparatus([
	            "simplyswords:runic_tablet",
	            "ars_nouveau:fire_essence",
	            "create:brass_sheet",
	            "simplyswords:runic_tablet",
	            "ars_nouveau:fire_essence",
	            "simplyswords:runic_tablet",
	            "create:brass_sheet",
	            "ars_nouveau:fire_essence"
	        ], // input items
		    "simplyswords:dormant_relic", // reagent
		    "simplyswords:righteous_relic", // output
		    5000,
		    true
		),
		event.recipes.ars_nouveau.enchanting_apparatus([
	            "simplyswords:runic_tablet",
	            "ars_nouveau:abjuration_essence",
	            "create:sturdy_sheet",
	            "simplyswords:runic_tablet",
	            "ars_nouveau:abjuration_essence",
	            "simplyswords:runic_tablet",
	            "create:sturdy_sheet",
	            "ars_nouveau:abjuration_essence"
	        ], // input items
		    "simplyswords:dormant_relic", // reagent
		    "simplyswords:tainted_relic", // output
		    5000,
		    true
		),
		event.recipes.ars_nouveau.enchanting_apparatus([
	            "iceandfire:dragonsteel_fire_ingot",
	            "minecraft:enchanted_golden_apple",
	            "spelunkery:orange_glowstick",
	            "simplyswords:runic_tablet",
	            "minecraft:enchanted_golden_apple",
	            "simplyswords:runic_tablet",
	            "spelunkery:orange_glowstick",
	            "minecraft:enchanted_golden_apple"
	        ], // input items
		    "simplyswords:righteous_relic", // reagent
		    "simplyswords:sunfire", // output
		    10000,
		    true
		),
		event.recipes.ars_nouveau.enchanting_apparatus([
	            "alexscaves:shadow_silk",
	            "minecraft:echo_shard",
	            "spelunkery:cyan_glowstick",
	            "simplyswords:runic_tablet",
	            "minecraft:echo_shard",
	            "simplyswords:runic_tablet",
	            "spelunkery:cyan_glowstick",
	            "minecraft:echo_shard"
	        ], // input items
		    "simplyswords:tainted_relic", // reagent
		    "simplyswords:harbinger", // output
		    10000,
		    true
		),
		event.recipes.ars_nouveau.enchanting_apparatus([
	            "simplyswords:runic_tablet",
	            "iceandfire:ectoplasm",
	            "#iceandfire:mob_skulls",
	            "simplyswords:runic_tablet",
	            "iceandfire:ectoplasm",
	            "simplyswords:runic_tablet",
	            "#iceandfire:mob_skulls",
	            "iceandfire:ectoplasm"
	        ], // input items
		    "simplyswords:slumbering_lichblade", // reagent
		    "simplyswords:waking_lichblade", // output
		    5000,
		    true
		),
		event.recipes.ars_nouveau.enchanting_apparatus([
	            "minecraft:nether_star",
	            "alexsmobs:skreecher_soul",
	            "alexsmobs:soul_heart",
	            "endermanoverhaul:soul_pearl",
	            "iceandfire:ghost_ingot",
	            "endermanoverhaul:soul_pearl",
	            "alexsmobs:soul_heart",
	            "alexsmobs:skreecher_soul"
	        ], // input items
		    "simplyswords:waking_lichblade", // reagent
		    "simplyswords:awakened_lichblade", // output
		    10000,
		    true
		)
	}
)
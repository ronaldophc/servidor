// Modify existing recipes
ServerEvents.recipes(event => {
    event.remove({ output: 'create:sturdy_sheet' }),
    event.remove({ output: 'alexscaves:uranium_rod' }),
    event.remove({ output: 'alexscaves:nuclear_siren' }),
    event.remove({ output: 'galosphere:saltbound_tablet'}),
    event.remove({ output: 'spelunkery:rock_salt', type: 'create:crushing'}),
    event.remove({ not: { type: 'minecraft:stonecutting' }, output: 'netherexp:polished_basalt_bricks', input: 'minecraft:polished_basalt'}),
    event.remove({ output: 'betternether:bone_block'}),
    event.remove({ output: 'betternether:bone_stairs'}),
    event.remove({ output: 'betternether:bone_slab'}),
    event.remove({ not: { type: 'minecraft:stonecutting' }, output: 'betternether:bone_wall'}),
    event.remove({ output: 'netherexp:netherite_plating', type: 'minecraft:crafting_shaped'}),
    event.remove({ output: 'netherexp:wither_bone_block', type: 'minecraft:crafting_shaped'}),

    event.recipes.createSequencedAssembly([
    Item.of('create:sturdy_sheet').withChance(100),
    Item.of('2x create:crushed_raw_lead').withChance(2.0),
    Item.of('5x oreganized:lead_nugget').withChance(2.0)
    ], 'oreganized:lead_ingot', [ 
     event.recipes.createFilling('create:unprocessed_obsidian_sheet', ['create:unprocessed_obsidian_sheet', Fluid.lava(500)]),
     event.recipes.createDeploying('create:unprocessed_obsidian_sheet', ['create:unprocessed_obsidian_sheet', 'create:powdered_obsidian']),
     event.recipes.createPressing('create:unprocessed_obsidian_sheet', ['create:unprocessed_obsidian_sheet'])   
    ]).transitionalItem('create:unprocessed_obsidian_sheet').loops(1),

    event.shaped('alexscaves:uranium_rod', [
      'ULU', 
      'UBU', 
      'ULU'  
      ], 
      {
       U: 'alexscaves:uranium',
       B: 'minecraft:blaze_rod',
       L: 'oreganized:lead_ingot'
    }),

    event.shaped('alexscaves:nuclear_siren', [
      'CUC', 
      ' L ', 
      ' L '  
      ], 
      {
       U: 'alexscaves:uranium',
       C: 'alexscaves:charred_remnant',
       L: 'oreganized:lead_ingot'
    }),

    event.shaped('8x galosphere:pink_salt', [
      'RRR', 
      'RPR', 
      'RRR'  
      ], 
      {
       R: 'spelunkery:rock_salt_block',
       P: 'minecraft:pink_dye'
    }),

    event.replaceInput(
      { input: 'galosphere:pink_salt_shard' },
      'galosphere:pink_salt_shard',           
      'spelunkery:rock_salt'        
    ),
    event.replaceOutput(
      { output: 'galosphere:pink_salt_shard' }, 
      'galosphere:pink_salt_shard',          
      'spelunkery:rock_salt'        
    ),
    event.recipes.createCrushing([
        '2x spelunkery:rock_salt',
        '2x spelunkery:salt',
        Item.of('#integrations:salt_blocks').withChance(0.15)
      ], '#integrations:salt_blocks'
    ),

    event.recipes.ars_nouveau.enchanting_apparatus([
              "spelunkery:salt_bucket",
              "#integrations:salt_blocks",
              "spelunkery:salt_bucket",
              "#integrations:salt_blocks",
              "spelunkery:salt_bucket",
              "#integrations:salt_blocks",
              "spelunkery:salt_bucket",
              "#integrations:salt_blocks"
          ], // input items
        "simplyswords:runic_tablet", // reagent
        "galosphere:saltbound_tablet", // output
        300
    ),
    event.shaped('4x netherexp:polished_basalt_bricks', [
        'BB', 
        'BB',
      ], 
      {
         B: 'betternether:basalt_bricks'
      }
    ),
    event.shaped('netherexp:wither_bone_block', [
      'WWW', 
      'WWW', 
      'WWW'  
      ], 
      {
       W: 'iceandfire:wither_shard'
    }
    ),
    event.replaceInput(
      { input: 'betternether:bone_block' },
      'betternether:bone_block',           
      'alexscaves:smooth_bone'        
    ),
    event.replaceInput(
      { input: 'betternether:bone_slab' },
      'betternether:bone_slab',           
      'alexscaves:smooth_bone_slab'        
    ),
    event.shaped('betternether:bone_wall', [
        'WWW', 
        'WWW'
        ], 
        {
         W: 'betternether:bone_tile'
      }
    ),
    event.recipes.create.compacting(
      ['netherexp:netherite_plating'], ['minecraft:gold_ingot', 'minecraft:netherite_scrap', '2x netherexp:stridite', Fluid.lava(10)
      ]
    ).superheated(),
    event.shaped('betternether:bone_button', [
        'W', 
        ], 
        {
         W: 'alexscaves:smooth_bone'
      }
    )
  }
)
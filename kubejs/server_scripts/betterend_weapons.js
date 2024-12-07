ServerEvents.recipes(event => {
		event.remove({ output: 'betterend:thallasium_shovel' }), 
		event.remove({ output: 'betterend:thallasium_sword' }), 
		event.remove({ output: 'betterend:thallasium_pickaxe' }), 
		event.remove({ output: 'betterend:thallasium_axe' }), 
		event.remove({ output: 'betterend:thallasium_hoe' }),
		event.remove({ output: 'betterend:terminite_shovel' }), 
		event.remove({ output: 'betterend:terminite_sword' }), 
		event.remove({ output: 'betterend:terminite_pickaxe' }), 
		event.remove({ output: 'betterend:terminite_axe' }), 
		event.remove({ output: 'betterend:terminite_hoe' }),
		event.remove({ output: 'betterend:aeternium_shovel' }), 
		event.remove({ output: 'betterend:aeternium_sword' }), 
		event.remove({ output: 'betterend:aeternium_pickaxe' }), 
		event.remove({ output: 'betterend:aeternium_axe' }), 
		event.remove({ output: 'betterend:aeternium_hoe' }), 
		event.remove({ output: 'knavesneeds:betterend/aeternium/longsword' }), 
		event.remove({ output: 'knavesneeds:betterend/aeternium/twinblade' }), 
		event.remove({ output: 'knavesneeds:betterend/aeternium/rapier' }), 
		event.remove({ output: 'knavesneeds:betterend/aeternium/katana' }), 
		event.remove({ output: 'knavesneeds:betterend/aeternium/sai' }), 
		event.remove({ output: 'knavesneeds:betterend/aeternium/spear' }), 
		event.remove({ output: 'knavesneeds:betterend/aeternium/glaive' }), 
		event.remove({ output: 'knavesneeds:betterend/aeternium/warglaive' }), 
		event.remove({ output: 'knavesneeds:betterend/aeternium/cutlass' }), 
		event.remove({ output: 'knavesneeds:betterend/aeternium/claymore' }), 
		event.remove({ output: 'knavesneeds:betterend/aeternium/greathammer' }), 
		event.remove({ output: 'knavesneeds:betterend/aeternium/greataxe' }), 
		event.remove({ output: 'knavesneeds:betterend/aeternium/chakram' }), 
		event.remove({ output: 'knavesneeds:betterend/aeternium/scythe' }), 
		event.remove({ output: 'knavesneeds:betterend/aeternium/halberd' }), 
		event.remove({ output: 'knavesneeds:betterend/terminite/longsword' }), 
		event.remove({ output: 'knavesneeds:betterend/terminite/twinblade' }), 
		event.remove({ output: 'knavesneeds:betterend/terminite/rapier' }), 
		event.remove({ output: 'knavesneeds:betterend/terminite/katana' }), 
		event.remove({ output: 'knavesneeds:betterend/terminite/sai' }), 
		event.remove({ output: 'knavesneeds:betterend/terminite/spear' }), 
		event.remove({ output: 'knavesneeds:betterend/terminite/glaive' }), 
		event.remove({ output: 'knavesneeds:betterend/terminite/warglaive' }), 
		event.remove({ output: 'knavesneeds:betterend/terminite/cutlass' }), 
		event.remove({ output: 'knavesneeds:betterend/terminite/claymore' }), 
		event.remove({ output: 'knavesneeds:betterend/terminite/greathammer' }), 
		event.remove({ output: 'knavesneeds:betterend/terminite/greataxe' }), 
		event.remove({ output: 'knavesneeds:betterend/terminite/chakram' }), 
		event.remove({ output: 'knavesneeds:betterend/terminite/scythe' }), 
		event.remove({ output: 'knavesneeds:betterend/terminite/halberd' }), 
		event.remove({ output: 'knavesneeds:betterend/thallasium/longsword' }), 
		event.remove({ output: 'knavesneeds:betterend/thallasium/twinblade' }), 
		event.remove({ output: 'knavesneeds:betterend/thallasium/rapier' }), 
		event.remove({ output: 'knavesneeds:betterend/thallasium/katana' }), 
		event.remove({ output: 'knavesneeds:betterend/thallasium/sai' }), 
		event.remove({ output: 'knavesneeds:betterend/thallasium/spear' }), 
		event.remove({ output: 'knavesneeds:betterend/thallasium/glaive' }), 
		event.remove({ output: 'knavesneeds:betterend/thallasium/warglaive' }), 
		event.remove({ output: 'knavesneeds:betterend/thallasium/cutlass' }), 
		event.remove({ output: 'knavesneeds:betterend/thallasium/claymore' }), 
		event.remove({ output: 'knavesneeds:betterend/thallasium/greathammer' }), 
		event.remove({ output: 'knavesneeds:betterend/thallasium/greataxe' }), 
		event.remove({ output: 'knavesneeds:betterend/thallasium/chakram' }), 
		event.remove({ output: 'knavesneeds:betterend/thallasium/scythe' }), 
		event.remove({ output: 'knavesneeds:betterend/thallasium/halberd' })


		event.shaped('betterend:thallasium_shovel', [
		  ' A ', 
		  ' B ', 
		  ' B '  
		  ], {
		      A: 'betterend:thallasium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('betterend:thallasium_sword', [
		  ' A ', 
		  ' A ', 
		  ' B '  
		  ], {
		      A: 'betterend:thallasium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('betterend:thallasium_pickaxe', [
		  'AAA', 
		  ' B ', 
		  ' B '  
		  ], {
		      A: 'betterend:thallasium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('betterend:thallasium_axe', [
		  'AA ', 
		  'AB ', 
		  ' B '  
		  ], {
		      A: 'betterend:thallasium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('betterend:thallasium_hoe', [
		  'AA ', 
		  ' B ', 
		  ' B '  
		  ], {
		      A: 'betterend:thallasium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('betterend:terminite_shovel', [
		  ' A ', 
		  ' B ', 
		  ' B '  
		  ], {
		      A: 'betterend:terminite_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('betterend:terminite_sword', [
		  ' A ', 
		  ' A ', 
		  ' B '  
		  ], {
		      A: 'betterend:terminite_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('betterend:terminite_pickaxe', [
		  'AAA', 
		  ' B ', 
		  ' B '  
		  ], {
		      A: 'betterend:terminite_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('betterend:terminite_axe', [
		  'AA ', 
		  'AB ', 
		  ' B '  
		  ], {
		      A: 'betterend:terminite_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('betterend:terminite_hoe', [
		  'AA ', 
		  ' B ', 
		  ' B '  
		  ], {
		      A: 'betterend:terminite_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('betterend:aeternium_shovel', [
		  ' A ', 
		  ' B ', 
		  ' B '  
		  ], {
		      A: 'betterend:aeternium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('betterend:aeternium_sword', [
		  ' A ', 
		  ' A ', 
		  ' B '  
		  ], {
		      A: 'betterend:aeternium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('betterend:aeternium_pickaxe', [
		  'AAA', 
		  ' B ', 
		  ' B '  
		  ], {
		      A: 'betterend:aeternium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('betterend:aeternium_axe', [
		  'AA ', 
		  'AB ', 
		  ' B '  
		  ], {
		      A: 'betterend:aeternium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('betterend:aeternium_hoe', [
		  'AA ', 
		  ' B ', 
		  ' B '  
		  ], {
		      A: 'betterend:aeternium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('knavesneeds:betterend/thallasium/longsword', [
		  'B  ', 
		  ' A ', 
		  '  A'  
		  ], {
		      A: 'betterend:thallasium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('knavesneeds:betterend/thallasium/twinblade', [
		  '  A', 
		  ' B ', 
		  'A  '  
		  ], {
		      A: 'betterend:thallasium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('knavesneeds:betterend/thallasium/rapier', [
		  '  A', 
		  ' A ', 
		  'B  '  
		  ], {
		      A: 'betterend:thallasium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('knavesneeds:betterend/thallasium/katana', [
		  '   ', 
		  'BAA', 
		  '   '  
		  ], {
		      A: 'betterend:thallasium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('knavesneeds:betterend/thallasium/sai', [
		  ' A ', 
		  'B  ', 
		  '   '  
		  ], {
		      A: 'betterend:thallasium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('knavesneeds:betterend/thallasium/spear', [
		  '  A', 
		  ' B ', 
		  'B  '  
		  ], {
		      A: 'betterend:thallasium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('knavesneeds:betterend/thallasium/glaive', [
		  '  A', 
		  ' BA', 
		  'B  '  
		  ], {
		      A: 'betterend:thallasium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('knavesneeds:betterend/thallasium/warglaive', [
		  ' C ', 
		  'ABA', 
		  '   '  
		  ], {
		      A: 'betterend:thallasium_ingot',
		      B: 'minecraft:stick',
		      C: 'spelunkery:diamond_shard'
		  }
		),
		event.shaped('knavesneeds:betterend/thallasium/cutlass', [
		  ' C ', 
		  'AA ', 
		  'B  '  
		  ], {
		      A: 'betterend:thallasium_ingot',
		      B: 'minecraft:stick',
		      C: 'spelunkery:diamond_shard'
		  }
		),
		event.shaped('knavesneeds:betterend/thallasium/claymore', [
		  ' CA', 
		  'CAC', 
		  'BC '  
		  ], {
		      A: 'betterend:thallasium_ingot',
		      B: 'minecraft:stick',
		      C: 'spelunkery:diamond_shard'
		  }
		),
		event.shaped('knavesneeds:betterend/thallasium/greathammer', [
		  'AAA', 
		  'CCC', 
		  ' B '  
		  ], {
		      A: 'betterend:thallasium_ingot',
		      B: 'minecraft:stick',
		      C: 'spelunkery:diamond_shard'
		  }
		),
		event.shaped('knavesneeds:betterend/thallasium/greataxe', [
		  'AAA', 
		  'CBC', 
		  ' B '  
		  ], {
		      A: 'betterend:thallasium_ingot',
		      B: 'minecraft:stick',
		      C: 'spelunkery:diamond_shard'
		  }
		),
		event.shaped('knavesneeds:betterend/thallasium/chakram', [
		  'CAC', 
		  'A A', 
		  'CBC'  
		  ], {
		      A: 'betterend:thallasium_ingot',
		      B: 'minecraft:stick',
		      C: 'spelunkery:diamond_shard'
		  }
		),
		event.shaped('knavesneeds:betterend/thallasium/scythe', [
		  'AAB', 
		  'AB ', 
		  'B  '  
		  ], {
		      A: 'betterend:thallasium_ingot',
		      B: 'minecraft:stick'
		  }
		),
		event.shaped('knavesneeds:betterend/thallasium/halberd', [
		  ' AC', 
		  'ABA', 
		  'B  '  
		  ], {
		      A: 'betterend:thallasium_ingot',
		      B: 'minecraft:stick',
		      C: 'spelunkery:diamond_shard'
		  }
		),

		//TERMINITE
		event.shaped('knavesneeds:betterend/terminite/longsword', [
		  'B  ', 
		  ' A ', 
		  '  A'  
		  ], {
		      A: 'betterend:terminite_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('knavesneeds:betterend/terminite/twinblade', [
		  '  A', 
		  ' B ', 
		  'A  '  
		  ], {
		      A: 'betterend:terminite_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('knavesneeds:betterend/terminite/rapier', [
		  '  A', 
		  ' A ', 
		  'B  '  
		  ], {
		      A: 'betterend:terminite_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('knavesneeds:betterend/terminite/katana', [
		  '   ', 
		  'BAA', 
		  '   '  
		  ], {
		      A: 'betterend:terminite_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('knavesneeds:betterend/terminite/sai', [
		  ' A ', 
		  'B  ', 
		  '   '  
		  ], {
		      A: 'betterend:terminite_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('knavesneeds:betterend/terminite/spear', [
		  '  A', 
		  ' B ', 
		  'B  '  
		  ], {
		      A: 'betterend:terminite_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('knavesneeds:betterend/terminite/glaive', [
		  '  A', 
		  ' BA', 
		  'B  '  
		  ], {
		      A: 'betterend:terminite_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('knavesneeds:betterend/terminite/warglaive', [
		  ' C ', 
		  'ABA', 
		  '   '  
		  ], {
		      A: 'betterend:terminite_ingot',
		      B: 'minecraft:stick',
		      C: 'spelunkery:diamond_shard'
		  }
		),
		event.shaped('knavesneeds:betterend/terminite/cutlass', [
		  ' C ', 
		  'AA ', 
		  'B  '  
		  ], {
		      A: 'betterend:terminite_ingot',
		      B: 'minecraft:stick',
		      C: 'spelunkery:diamond_shard'
		  }
		),
		event.shaped('knavesneeds:betterend/terminite/claymore', [
		  ' CA', 
		  'CAC', 
		  'BC '  
		  ], {
		      A: 'betterend:terminite_ingot',
		      B: 'minecraft:stick',
		      C: 'spelunkery:diamond_shard'
		  }
		),
		event.shaped('knavesneeds:betterend/terminite/greathammer', [
		  'AAA', 
		  'CCC', 
		  ' B '  
		  ], {
		      A: 'betterend:terminite_ingot',
		      B: 'minecraft:stick',
		      C: 'spelunkery:diamond_shard'
		  }
		),
		event.shaped('knavesneeds:betterend/terminite/greataxe', [
		  'AAA', 
		  'CBC', 
		  ' B '  
		  ], {
		      A: 'betterend:terminite_ingot',
		      B: 'minecraft:stick',
		      C: 'spelunkery:diamond_shard'
		  }
		),
		event.shaped('knavesneeds:betterend/terminite/chakram', [
		  'CAC', 
		  'A A', 
		  'CBC'  
		  ], {
		      A: 'betterend:terminite_ingot',
		      B: 'minecraft:stick',
		      C: 'spelunkery:diamond_shard'
		  }
		),
		event.shaped('knavesneeds:betterend/terminite/scythe', [
		  'AAB', 
		  'AB ', 
		  'B  '  
		  ], {
		      A: 'betterend:terminite_ingot',
		      B: 'minecraft:stick'
		  }
		),
		event.shaped('knavesneeds:betterend/terminite/halberd', [
		  ' AC', 
		  'ABA', 
		  'B  '  
		  ], {
		      A: 'betterend:terminite_ingot',
		      B: 'minecraft:stick',
		      C: 'spelunkery:diamond_shard'
		  }
		),

		//AETERNIUM
		event.shaped('knavesneeds:betterend/aeternium/longsword', [
		  'B  ', 
		  ' A ', 
		  '  A'  
		  ], {
		      A: 'betterend:aeternium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('knavesneeds:betterend/aeternium/twinblade', [
		  '  A', 
		  ' B ', 
		  'A  '  
		  ], {
		      A: 'betterend:aeternium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('knavesneeds:betterend/aeternium/rapier', [
		  '  A', 
		  ' A ', 
		  'B  '  
		  ], {
		      A: 'betterend:aeternium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('knavesneeds:betterend/aeternium/katana', [
		  '   ', 
		  'BAA', 
		  '   '  
		  ], {
		      A: 'betterend:aeternium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('knavesneeds:betterend/aeternium/sai', [
		  ' A ', 
		  'B  ', 
		  '   '  
		  ], {
		      A: 'betterend:aeternium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('knavesneeds:betterend/aeternium/spear', [
		  '  A', 
		  ' B ', 
		  'B  '  
		  ], {
		      A: 'betterend:aeternium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('knavesneeds:betterend/aeternium/glaive', [
		  '  A', 
		  ' BA', 
		  'B  '  
		  ], {
		      A: 'betterend:aeternium_ingot',
		      B: 'minecraft:stick' 
		  }
		),
		event.shaped('knavesneeds:betterend/aeternium/warglaive', [
		  ' C ', 
		  'ABA', 
		  '   '  
		  ], {
		      A: 'betterend:aeternium_ingot',
		      B: 'minecraft:stick',
		      C: 'createdeco:netherite_nugget'
		  }
		),
		event.shaped('knavesneeds:betterend/aeternium/cutlass', [
		  ' C ', 
		  'AA ', 
		  'B  '  
		  ], {
		      A: 'betterend:aeternium_ingot',
		      B: 'minecraft:stick',
		      C: 'createdeco:netherite_nugget'
		  }
		),
		event.shaped('knavesneeds:betterend/aeternium/claymore', [
		  ' CA', 
		  'CAC', 
		  'BC '  
		  ], {
		      A: 'betterend:aeternium_ingot',
		      B: 'minecraft:stick',
		      C: 'createdeco:netherite_nugget'
		  }
		),
		event.shaped('knavesneeds:betterend/aeternium/greathammer', [
		  'AAA', 
		  'CCC', 
		  ' B '  
		  ], {
		      A: 'betterend:aeternium_ingot',
		      B: 'minecraft:stick',
		      C: 'createdeco:netherite_nugget'
		  }
		),
		event.shaped('knavesneeds:betterend/aeternium/greataxe', [
		  'AAA', 
		  'CBC', 
		  ' B '  
		  ], {
		      A: 'betterend:aeternium_ingot',
		      B: 'minecraft:stick',
		      C: 'createdeco:netherite_nugget'
		  }
		),
		event.shaped('knavesneeds:betterend/aeternium/chakram', [
		  'CAC', 
		  'A A', 
		  'CBC'  
		  ], {
		      A: 'betterend:aeternium_ingot',
		      B: 'minecraft:stick',
		      C: 'createdeco:netherite_nugget'
		  }
		),
		event.shaped('knavesneeds:betterend/aeternium/scythe', [
		  'AAB', 
		  'AB ', 
		  'B  '  
		  ], {
		      A: 'betterend:aeternium_ingot',
		      B: 'minecraft:stick'
		  }
		),
		event.shaped('knavesneeds:betterend/aeternium/halberd', [
		  ' AC', 
		  'ABA', 
		  'B  '  
		  ], {
		      A: 'betterend:aeternium_ingot',
		      B: 'minecraft:stick',
		      C: 'createdeco:netherite_nugget'
		  }
		)
	}
)
all

rule "no-duplicate-header", :allow_different_nesting => true
rule 'line-length', :line_length=>120, :code_blocks=>false, :tables=> false

exclude_rule 'no-bare-urls'
exclude_rule 'no-trailing-punctuation'
exclude_rule 'code-block-style'

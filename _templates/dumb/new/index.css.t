---
to: src/components/<%= name %>/index.css
---
<% const comp = h.inflection.undasherize(name) -%>
.<%= comp %>{
    display: block;
}




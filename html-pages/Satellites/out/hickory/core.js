// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :target :nodejs, :nodejs-rt false, :optimizations :advanced}
goog.provide('hickory.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hickory.utils');
goog.require('clojure.zip');
goog.require('goog.string');

/**
 * Objects that can be represented as Hiccup nodes implement this protocol in
 * order to make the conversion.
 * @interface
 */
hickory.core.HiccupRepresentable = function(){};

var hickory$core$HiccupRepresentable$as_hiccup$dyn_41276 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (hickory.core.as_hiccup[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (hickory.core.as_hiccup["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("HiccupRepresentable.as-hiccup",this$);
}
}
});
/**
 * Converts the node given into a hiccup-format data structure. The
 *   node must have an implementation of the HiccupRepresentable
 *   protocol; nodes created by parse or parse-fragment already do.
 */
hickory.core.as_hiccup = (function hickory$core$as_hiccup(this$){
if((((!((this$ == null)))) && ((!((this$.hickory$core$HiccupRepresentable$as_hiccup$arity$1 == null)))))){
return this$.hickory$core$HiccupRepresentable$as_hiccup$arity$1(this$);
} else {
return hickory$core$HiccupRepresentable$as_hiccup$dyn_41276(this$);
}
});


/**
 * Objects that can be represented as HTML DOM node maps, similar to
 * clojure.xml, implement this protocol to make the conversion.
 * 
 * Each DOM node will be a map or string (for Text/CDATASections). Nodes that
 * are maps have the appropriate subset of the keys
 * 
 *   :type     - [:comment, :document, :document-type, :element]
 *   :tag      - node's tag, check :type to see if applicable
 *   :attrs    - node's attributes as a map, check :type to see if applicable
 *   :content  - node's child nodes, in a vector, check :type to see if
 *               applicable
 * @interface
 */
hickory.core.HickoryRepresentable = function(){};

var hickory$core$HickoryRepresentable$as_hickory$dyn_41277 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (hickory.core.as_hickory[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (hickory.core.as_hickory["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("HickoryRepresentable.as-hickory",this$);
}
}
});
/**
 * Converts the node given into a hickory-format data structure. The
 *   node must have an implementation of the HickoryRepresentable protocol;
 *   nodes created by parse or parse-fragment already do.
 */
hickory.core.as_hickory = (function hickory$core$as_hickory(this$){
if((((!((this$ == null)))) && ((!((this$.hickory$core$HickoryRepresentable$as_hickory$arity$1 == null)))))){
return this$.hickory$core$HickoryRepresentable$as_hickory$arity$1(this$);
} else {
return hickory$core$HickoryRepresentable$as_hickory$dyn_41277(this$);
}
});

hickory.core.node_type = (function hickory$core$node_type(type){
return (Node[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"_NODE"].join('')]);
});
hickory.core.Attribute = hickory.core.node_type("ATTRIBUTE");
hickory.core.Comment = hickory.core.node_type("COMMENT");
hickory.core.Document = hickory.core.node_type("DOCUMENT");
hickory.core.DocumentType = hickory.core.node_type("DOCUMENT_TYPE");
hickory.core.Element = hickory.core.node_type("ELEMENT");
hickory.core.Text = hickory.core.node_type("TEXT");
hickory.core.extend_type_with_seqable = (function hickory$core$extend_type_with_seqable(t){
(t.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL);

return (t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){
var array__$1 = this;
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(array__$1);
}));
});
hickory.core.extend_type_with_seqable(NodeList);
if((typeof NamedNodeMap !== 'undefined')){
hickory.core.extend_type_with_seqable(NamedNodeMap);
} else {
}
if((typeof MozNamedAttrMap !== 'undefined')){
hickory.core.extend_type_with_seqable(MozNamedAttrMap);
} else {
}
hickory.core.format_doctype = (function hickory$core$format_doctype(dt){
var name = (dt["name"]);
var publicId = (dt["publicId"]);
var systemId = (dt["systemId"]);
if((!(cljs.core.empty_QMARK_(publicId)))){
return goog.string.format("<!DOCTYPE %s PUBLIC \"%s\" \"%s\">",name,publicId,systemId);
} else {
return ["<!DOCTYPE ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),">"].join('');
}
});
goog.object.set(hickory.core.HiccupRepresentable,"object",true);

goog.object.set(hickory.core.as_hiccup,"object",(function (this$){
var pred__41279 = cljs.core._EQ_;
var expr__41280 = (this$["nodeType"]);
if(cljs.core.truth_((pred__41279.cljs$core$IFn$_invoke$arity$2 ? pred__41279.cljs$core$IFn$_invoke$arity$2(hickory.core.Attribute,expr__41280) : pred__41279.call(null,hickory.core.Attribute,expr__41280)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hickory.utils.lower_case_keyword((this$["name"])),(this$["value"])], null);
} else {
if(cljs.core.truth_((pred__41279.cljs$core$IFn$_invoke$arity$2 ? pred__41279.cljs$core$IFn$_invoke$arity$2(hickory.core.Comment,expr__41280) : pred__41279.call(null,hickory.core.Comment,expr__41280)))){
return ["<!--",cljs.core.str.cljs$core$IFn$_invoke$arity$1((this$["data"])),"-->"].join('');
} else {
if(cljs.core.truth_((pred__41279.cljs$core$IFn$_invoke$arity$2 ? pred__41279.cljs$core$IFn$_invoke$arity$2(hickory.core.Document,expr__41280) : pred__41279.call(null,hickory.core.Document,expr__41280)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,(this$["childNodes"]));
} else {
if(cljs.core.truth_((pred__41279.cljs$core$IFn$_invoke$arity$2 ? pred__41279.cljs$core$IFn$_invoke$arity$2(hickory.core.DocumentType,expr__41280) : pred__41279.call(null,hickory.core.DocumentType,expr__41280)))){
return hickory.core.format_doctype(this$);
} else {
if(cljs.core.truth_((pred__41279.cljs$core$IFn$_invoke$arity$2 ? pred__41279.cljs$core$IFn$_invoke$arity$2(hickory.core.Element,expr__41280) : pred__41279.call(null,hickory.core.Element,expr__41280)))){
var tag = hickory.utils.lower_case_keyword((this$["tagName"]));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,(this$["attributes"])))], null),(cljs.core.truth_((hickory.utils.unescapable_content.cljs$core$IFn$_invoke$arity$1 ? hickory.utils.unescapable_content.cljs$core$IFn$_invoke$arity$1(tag) : hickory.utils.unescapable_content.call(null,tag)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41278_SHARP_){
return (p1__41278_SHARP_["wholeText"]);
}),(this$["childNodes"])):cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,(this$["childNodes"])))));
} else {
if(cljs.core.truth_((pred__41279.cljs$core$IFn$_invoke$arity$2 ? pred__41279.cljs$core$IFn$_invoke$arity$2(hickory.core.Text,expr__41280) : pred__41279.call(null,hickory.core.Text,expr__41280)))){
return hickory.utils.html_escape((this$["wholeText"]));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__41280)].join('')));
}
}
}
}
}
}
}));
goog.object.set(hickory.core.HickoryRepresentable,"object",true);

goog.object.set(hickory.core.as_hickory,"object",(function (this$){
var pred__41282 = cljs.core._EQ_;
var expr__41283 = (this$["nodeType"]);
if(cljs.core.truth_((pred__41282.cljs$core$IFn$_invoke$arity$2 ? pred__41282.cljs$core$IFn$_invoke$arity$2(hickory.core.Attribute,expr__41283) : pred__41282.call(null,hickory.core.Attribute,expr__41283)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hickory.utils.lower_case_keyword((this$["name"])),(this$["value"])], null);
} else {
if(cljs.core.truth_((pred__41282.cljs$core$IFn$_invoke$arity$2 ? pred__41282.cljs$core$IFn$_invoke$arity$2(hickory.core.Comment,expr__41283) : pred__41282.call(null,hickory.core.Comment,expr__41283)))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$comment,cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(this$["data"])], null)], null);
} else {
if(cljs.core.truth_((pred__41282.cljs$core$IFn$_invoke$arity$2 ? pred__41282.cljs$core$IFn$_invoke$arity$2(hickory.core.Document,expr__41283) : pred__41282.call(null,hickory.core.Document,expr__41283)))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$document,cljs.core.cst$kw$content,cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hickory,(this$["childNodes"]))))], null);
} else {
if(cljs.core.truth_((pred__41282.cljs$core$IFn$_invoke$arity$2 ? pred__41282.cljs$core$IFn$_invoke$arity$2(hickory.core.DocumentType,expr__41283) : pred__41282.call(null,hickory.core.DocumentType,expr__41283)))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$document_DASH_type,cljs.core.cst$kw$attrs,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,(this$["name"]),cljs.core.cst$kw$publicid,(this$["publicId"]),cljs.core.cst$kw$systemid,(this$["systemId"])], null)], null);
} else {
if(cljs.core.truth_((pred__41282.cljs$core$IFn$_invoke$arity$2 ? pred__41282.cljs$core$IFn$_invoke$arity$2(hickory.core.Element,expr__41283) : pred__41282.call(null,hickory.core.Element,expr__41283)))){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$element,cljs.core.cst$kw$attrs,cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hickory,(this$["attributes"])))),cljs.core.cst$kw$tag,hickory.utils.lower_case_keyword((this$["tagName"])),cljs.core.cst$kw$content,cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hickory,(this$["childNodes"]))))], null);
} else {
if(cljs.core.truth_((pred__41282.cljs$core$IFn$_invoke$arity$2 ? pred__41282.cljs$core$IFn$_invoke$arity$2(hickory.core.Text,expr__41283) : pred__41282.call(null,hickory.core.Text,expr__41283)))){
return (this$["wholeText"]);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__41283)].join('')));
}
}
}
}
}
}
}));
hickory.core.extract_doctype = (function hickory$core$extract_doctype(s){
var temp__5753__auto__ = cljs.core.second((function (){var or__4223__auto__ = cljs.core.re_find(/<!DOCTYPE ([^>]*)>/,s);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.re_find(/<!doctype ([^>]*)>/,s);
}
})());
if(cljs.core.truth_(temp__5753__auto__)){
var doctype = temp__5753__auto__;
return cljs.core.re_find(/([^\s]*)(\s+PUBLIC\s+[\"]?([^\"]*)[\"]?\s+[\"]?([^\"]*)[\"]?)?/,doctype);
} else {
return null;
}
});
hickory.core.remove_el = (function hickory$core$remove_el(el){
return (el["parentNode"]).removeChild(el);
});
hickory.core.parse_dom_with_domparser = (function hickory$core$parse_dom_with_domparser(s){
if((typeof DOMParser !== 'undefined')){
return (new DOMParser()).parseFromString(s,"text/html");
} else {
return null;
}
});
/**
 * Parse an HTML document (or fragment) as a DOM using document.implementation.createHTMLDocument and document.write.
 */
hickory.core.parse_dom_with_write = (function hickory$core$parse_dom_with_write(s){
var doc = document.implementation.createHTMLDocument("");
var doctype_el = (doc["doctype"]);
if(cljs.core.truth_(hickory.core.extract_doctype(s))){
} else {
hickory.core.remove_el(doctype_el);
}

var temp__5753__auto___41285 = cljs.core.first((doc["head"]["childNodes"]));
if(cljs.core.truth_(temp__5753__auto___41285)){
var title_el_41286 = temp__5753__auto___41285;
if(cljs.core.empty_QMARK_((title_el_41286["text"]))){
hickory.core.remove_el(title_el_41286);
} else {
}
} else {
}

doc.write(s);

return doc;
});
/**
 * Parse an entire HTML document into a DOM structure that can be
 * used as input to as-hiccup or as-hickory.
 * 
 * ```klipse
 *   (-> (parse "<a style=\"visibility:hidden\">foo</a><div style=\"color:green\"><p>Hello</p></div>")
 *  as-hiccup)
 * ```
 * 
 * ```klipse
 *   (-> (parse "<a style=\"visibility:hidden\">foo</a><div style=\"color:green\"><p>Hello</p></div>")
 *  as-hickory)
 * ```
 * 
 * 
 *   
 */
hickory.core.parse = (function hickory$core$parse(s){
var or__4223__auto__ = hickory.core.parse_dom_with_domparser(s);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return hickory.core.parse_dom_with_write(s);
}
});
/**
 * Parse an HTML fragment (some group of tags that might be at home somewhere
 * in the tag hierarchy under <body>) into a list of DOM elements that can
 * each be passed as input to as-hiccup or as-hickory.
 */
hickory.core.parse_fragment = (function hickory$core$parse_fragment(s){
return (hickory.core.parse(s)["body"]["childNodes"]);
});

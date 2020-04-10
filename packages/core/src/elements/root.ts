import { Accessor } from "./accessor";
import { Element } from "./element";
import { GraphChildList } from "../graph/graph-decorators";
import { Link } from "../graph/graph-links";
import { Material } from "./material";
import { Mesh } from "./mesh";
import { Node } from "./node";
import { Scene } from "./scene";
import { Texture } from "./texture";

export class Root extends Element {
    private asset: GLTF.IAsset = {
        generator: 'glTF-Transform v0.1', // TODO(donmccurdy): Autogenerate this.
        version: '2.0'
    };

    @GraphChildList private scenes: Link<Root, Scene>[] = [];
    @GraphChildList private nodes: Link<Root, Node>[] = [];
    @GraphChildList private meshes: Link<Root, Mesh>[] = [];
    @GraphChildList private materials: Link<Root, Material>[] = [];
    @GraphChildList private textures: Link<Root, Texture>[] = [];
    @GraphChildList private accessors: Link<Root, Accessor>[] = [];

    public getAsset(): GLTF.IAsset { return this.asset; }

    public updateAsset(asset: object): Root {
        Object.assign(this.asset, asset);
        return this;
    }

    public addScene(scene: Scene): Root {
        return this.addGraphChild(this.scenes, this.graph.link(this, scene) as Link<Root, Scene>) as Root;
    }
    public removeScene(scene: Scene): Root {
        return this.removeGraphChild(this.scenes, scene) as Root;
    }
    public listScenes(): Scene[] {
        return this.scenes.map((p) => p.getRight());
    }

    public addNode(node: Node): Root {
        return this.addGraphChild(this.nodes, this.graph.link(this, node) as Link<Root, Node>) as Root;
    }

    public removeNode(node: Node): Root {
        return this.removeGraphChild(this.nodes, node) as Root;
    }

    public listNodes(): Node[] {
        return this.nodes.map((p) => p.getRight());
    }

    public addMesh(mesh: Mesh): Root {
        return this.addGraphChild(this.meshes, this.graph.link(this, mesh) as Link<Root, Mesh>) as Root;
    }

    public removeMesh(mesh: Mesh): Root {
        return this.removeGraphChild(this.meshes, mesh) as Root;
    }

    public listMeshes(): Mesh[] {
        return this.meshes.map((p) => p.getRight());
    }

    public addMaterial(material: Material): Root {
        return this.addGraphChild(this.materials, this.graph.link(this, material) as Link<Root, Material>) as Root;
    }

    public removeMaterial(material: Material): Root {
        return this.removeGraphChild(this.materials, material) as Root;
    }

    public listMaterials(): Material[] {
        return this.materials.map((p) => p.getRight());
    }

    public addTexture(texture: Texture): Root {
        return this.addGraphChild(this.textures, this.graph.link(this, texture) as Link<Root, Texture>) as Root;
    }

    public removeTexture(texture: Texture): Root {
        return this.removeGraphChild(this.textures, texture) as Root;
    }

    public listTextures(): Texture[] {
        return this.textures.map((p) => p.getRight());
    }

    public addAccessor(accessor: Accessor): Root {
        return this.addGraphChild(this.accessors, this.graph.link(this, accessor) as Link<Root, Accessor>) as Root;
    }

    public removeAccessor(accessor: Accessor): Root {
        return this.removeGraphChild(this.accessors, accessor) as Root;
    }

    public listAccessors(): Accessor[] {
        return this.accessors.map((p) => p.getRight());
    }
}
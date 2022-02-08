package com.example.PhysicsClass;

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

@RestController
//@RequestMapping("/api")
public class NameList {

    ConcurrentMap<String, Profile> profiles = new ConcurrentHashMap<>();

    @GetMapping("/{id}")
    public Profile getProfile(@PathVariable String id){
        return profiles.get(id);
    }

    @GetMapping("/")
    public List<Profile> getAllProfiles(){
        return new ArrayList<Profile>(profiles.values());
    }

    @PostMapping("/")
    public Profile addProfile(@RequestBody Profile profile){
        profiles.put(profile.getId(), profile);
        return profile;
    }

}
